const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const https = require("https");

const HOST = "0.0.0.0";
const PORT = Number(process.env.PORT || 3000);
const WEB_ROOT = __dirname;
const DATA_DIR = path.join(__dirname, "data");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");

const BODY_LIMIT_BYTES = 32 * 1024;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX = 15;
const rateLimitByIp = new Map();

const ADMIN_TOKEN = String(process.env.ADMIN_TOKEN || "Amitkumar1999");
const RESEND_API_KEY = String(process.env.RESEND_API_KEY || "");
const WEB3FORMS_ACCESS_KEY = String(process.env.WEB3FORMS_ACCESS_KEY || "");
const CONTACT_TO_EMAIL = String(process.env.CONTACT_TO_EMAIL || "Amitkumar838401@gmail.com");
const CONTACT_FROM_EMAIL = String(process.env.CONTACT_FROM_EMAIL || "Portfolio Bot <onboarding@resend.dev>");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

function setSecurityHeaders(res) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' https: data:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https: data:; script-src 'self' 'unsafe-inline' https:; connect-src 'self' https://api.github.com https://github-readme-activity-graph.vercel.app https://github-readme-stats.vercel.app;"
  );
}

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(body);
}

function normalizeIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket.remoteAddress || "unknown";
}

function hitRateLimit(ip) {
  const now = Date.now();
  const existing = rateLimitByIp.get(ip) || [];
  const recent = existing.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  rateLimitByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function sanitizeText(value, maxLength) {
  return String(value || "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function validateContact(payload) {
  const name = sanitizeText(payload.name, 60);
  const email = sanitizeText(payload.email, 120).toLowerCase();
  const message = sanitizeText(payload.message, 800);
  const source = sanitizeText(payload.source, 40) || "portfolio";

  if (name.length < 2) {
    return { ok: false, message: "Name should be at least 2 characters." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (message.length < 10) {
    return { ok: false, message: "Message should be at least 10 characters." };
  }

  return { ok: true, value: { name, email, message, source } };
}

async function ensureStorage() {
  await fsp.mkdir(DATA_DIR, { recursive: true });
  if (!fs.existsSync(MESSAGES_FILE)) {
    await fsp.writeFile(MESSAGES_FILE, "[]", "utf-8");
  }
}

async function readMessages() {
  await ensureStorage();
  const content = await fsp.readFile(MESSAGES_FILE, "utf-8");
  return JSON.parse(content || "[]");
}

async function writeMessages(messages) {
  await ensureStorage();
  await fsp.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
}

async function appendMessage(message) {
  const messages = await readMessages();
  messages.push(message);
  await writeMessages(messages);
}

async function deleteMessageById(messageId) {
  const messages = await readMessages();
  const next = messages.filter((item) => item.id !== messageId);
  const deleted = next.length !== messages.length;
  if (deleted) {
    await writeMessages(next);
  }
  return deleted;
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];

    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > BODY_LIMIT_BYTES) {
        reject(new Error("Payload too large."));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });

    req.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf-8");
        const data = raw ? JSON.parse(raw) : {};
        resolve(data);
      } catch {
        reject(new Error("Invalid JSON payload."));
      }
    });

    req.on("error", reject);
  });
}

function resolveStaticPath(urlPath) {
  const withoutQuery = urlPath.split("?")[0];
  const cleaned = withoutQuery === "/" ? "/index.html" : withoutQuery;
  const decoded = decodeURIComponent(cleaned);
  const safeRelative = decoded.replace(/^\/+/, "");
  const resolved = path.resolve(WEB_ROOT, safeRelative);
  if (!resolved.startsWith(WEB_ROOT)) {
    return null;
  }
  return resolved;
}

async function serveStatic(req, res) {
  const filePath = resolveStaticPath(req.url || "/");
  if (!filePath) {
    sendJson(res, 403, { ok: false, message: "Forbidden path." });
    return;
  }

  try {
    const stat = await fsp.stat(filePath);
    if (stat.isDirectory()) {
      const indexPath = path.join(filePath, "index.html");
      const indexContent = await fsp.readFile(indexPath);
      res.writeHead(200, { "Content-Type": MIME_TYPES[".html"] });
      res.end(indexContent);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = MIME_TYPES[ext] || "application/octet-stream";
    const content = await fsp.readFile(filePath);
    res.writeHead(200, { "Content-Type": type });
    res.end(content);
  } catch {
    sendJson(res, 404, { ok: false, message: "Not found." });
  }
}

function getAdminTokenFromRequest(req, urlObj) {
  const auth = String(req.headers.authorization || "");
  if (auth.startsWith("Bearer ")) {
    return auth.slice("Bearer ".length).trim();
  }
  const headerToken = String(req.headers["x-admin-token"] || "").trim();
  if (headerToken) {
    return headerToken;
  }
  return String(urlObj.searchParams.get("token") || "").trim();
}

function isAuthorizedAdmin(req, urlObj) {
  if (!ADMIN_TOKEN) {
    return false;
  }
  const token = getAdminTokenFromRequest(req, urlObj);
  return token === ADMIN_TOKEN;
}

function postJsonHttps(url, payload, headers = {}) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const parsed = new URL(url);

    const req = https.request(
      {
        hostname: parsed.hostname,
        path: `${parsed.pathname}${parsed.search}`,
        method: "POST",
        port: 443,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(data),
          ...headers
        }
      },
      (res) => {
        let raw = "";
        res.on("data", (chunk) => {
          raw += chunk;
        });
        res.on("end", () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(raw);
            return;
          }
          reject(new Error(`Email API error: ${res.statusCode} ${raw}`));
        });
      }
    );

    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

async function sendResendEmail(message) {
  if (!RESEND_API_KEY) {
    return;
  }

  const subject = `New Portfolio Contact: ${message.name}`;
  const html = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${message.name}</p>
    <p><strong>Email:</strong> ${message.email}</p>
    <p><strong>Source:</strong> ${message.source}</p>
    <p><strong>Message:</strong></p>
    <p>${message.message.replace(/\n/g, "<br>")}</p>
    <hr>
    <p><small>Message ID: ${message.id}</small></p>
  `;

  await postJsonHttps(
    "https://api.resend.com/emails",
    {
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      subject,
      html
    },
    {
      Authorization: `Bearer ${RESEND_API_KEY}`
    }
  );
}

async function sendWeb3FormsEmail(message) {
  if (!WEB3FORMS_ACCESS_KEY) {
    return;
  }

  await postJsonHttps("https://api.web3forms.com/submit", {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: `New Portfolio Contact: ${message.name}`,
    from_name: "Portfolio Contact Bot",
    name: message.name,
    email: message.email,
    message: `${message.message}\n\nSource: ${message.source}\nMessage ID: ${message.id}`
  });
}

async function trySendEmail(message) {
  // Priority: Web3Forms free tier -> Resend
  if (WEB3FORMS_ACCESS_KEY) {
    await sendWeb3FormsEmail(message);
    return;
  }
  if (RESEND_API_KEY) {
    await sendResendEmail(message);
  }
}

async function handleApi(req, res, urlObj) {
  if (req.method === "GET" && urlObj.pathname === "/api/health") {
    sendJson(res, 200, { ok: true, status: "healthy", timestamp: new Date().toISOString() });
    return;
  }

  if (req.method === "POST" && urlObj.pathname === "/api/contact") {
    const ip = normalizeIp(req);
    if (hitRateLimit(ip)) {
      sendJson(res, 429, { ok: false, message: "Too many requests. Please try again later." });
      return;
    }

    try {
      const payload = await parseJsonBody(req);
      const validated = validateContact(payload);
      if (!validated.ok) {
        sendJson(res, 400, { ok: false, message: validated.message });
        return;
      }

      const message = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        ip,
        userAgent: sanitizeText(req.headers["user-agent"] || "unknown", 200),
        read: false,
        ...validated.value
      };

      await appendMessage(message);
      sendJson(res, 201, { ok: true, message: "Message received successfully." });

      // Fire-and-forget email forward; does not block API response.
      trySendEmail(message).catch(() => {});
      return;
    } catch (error) {
      sendJson(res, 400, { ok: false, message: error.message || "Invalid request." });
      return;
    }
  }

  if (req.method === "GET" && urlObj.pathname === "/api/admin/messages") {
    if (!isAuthorizedAdmin(req, urlObj)) {
      sendJson(res, 401, { ok: false, message: "Unauthorized admin token." });
      return;
    }

    const limitParam = Number(urlObj.searchParams.get("limit") || 200);
    const limit = Number.isFinite(limitParam) ? Math.max(1, Math.min(500, limitParam)) : 200;
    const messages = await readMessages();
    const sorted = [...messages].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    sendJson(res, 200, { ok: true, items: sorted.slice(0, limit), count: sorted.length });
    return;
  }

  if (req.method === "DELETE" && urlObj.pathname.startsWith("/api/admin/messages/")) {
    if (!isAuthorizedAdmin(req, urlObj)) {
      sendJson(res, 401, { ok: false, message: "Unauthorized admin token." });
      return;
    }
    const messageId = sanitizeText(urlObj.pathname.split("/").pop(), 60);
    const deleted = await deleteMessageById(messageId);
    if (!deleted) {
      sendJson(res, 404, { ok: false, message: "Message not found." });
      return;
    }
    sendJson(res, 200, { ok: true, message: "Message deleted." });
    return;
  }

  sendJson(res, 404, { ok: false, message: "API route not found." });
}

const server = http.createServer(async (req, res) => {
  setSecurityHeaders(res);

  try {
    const urlObj = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    if (urlObj.pathname.startsWith("/api/")) {
      await handleApi(req, res, urlObj);
      return;
    }
    await serveStatic(req, res);
  } catch {
    sendJson(res, 500, { ok: false, message: "Internal server error." });
  }
});

server.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Portfolio server running at http://${HOST}:${PORT}`);
});
