const tokenInput = document.getElementById("adminToken");
const saveTokenBtn = document.getElementById("saveTokenBtn");
const clearTokenBtn = document.getElementById("clearTokenBtn");
const refreshBtn = document.getElementById("refreshBtn");
const tokenStatus = document.getElementById("tokenStatus");
const messagesContainer = document.getElementById("messagesContainer");
const countBadge = document.getElementById("countBadge");
const searchInput = document.getElementById("searchInput");
const totalStat = document.getElementById("totalStat");
const todayStat = document.getElementById("todayStat");
const uniqueStat = document.getElementById("uniqueStat");
let allMessages = [];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function getToken() {
  return localStorage.getItem("admin_token") || "";
}

function setToken(token) {
  localStorage.setItem("admin_token", token);
}

function setStatus(message, isError = false) {
  tokenStatus.textContent = message;
  tokenStatus.style.color = isError ? "#ff9cb0" : "";
}

function getTodayCount(items) {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  const d = now.getDate();
  return items.filter((item) => {
    const dt = new Date(item.createdAt);
    return dt.getFullYear() === y && dt.getMonth() === m && dt.getDate() === d;
  }).length;
}

function updateStats(items) {
  totalStat.textContent = String(items.length);
  todayStat.textContent = String(getTodayCount(items));
  uniqueStat.textContent = String(new Set(items.map((item) => item.email)).size);
}

function renderMessages(items) {
  countBadge.textContent = `${items.length} message${items.length === 1 ? "" : "s"}`;
  updateStats(items);
  if (!items.length) {
    messagesContainer.innerHTML = '<div class="empty">No messages yet.</div>';
    return;
  }

  messagesContainer.innerHTML = items
    .map((item) => {
      const created = new Date(item.createdAt).toLocaleString();
      return `
        <article class="message-card">
          <div class="message-top">
            <strong class="message-name">${escapeHtml(item.name)}</strong>
            <span class="message-meta">${escapeHtml(created)}</span>
          </div>
          <div class="meta-row">
            <span class="chip">${escapeHtml(item.email)}</span>
            <span class="chip">${escapeHtml(item.source || "portfolio")}</span>
            <span class="chip">${escapeHtml(item.ip || "unknown ip")}</span>
          </div>
          <p class="message-text">${escapeHtml(item.message)}</p>
          <div class="message-actions">
            <button type="button" class="delete-btn" data-id="${escapeHtml(item.id)}">Delete</button>
          </div>
        </article>
      `;
    })
    .join("");
}

async function fetchMessages() {
  const token = getToken();
  if (!token) {
    renderMessages([]);
    setStatus("Enter and save ADMIN_TOKEN first.");
    return;
  }

  try {
    const response = await fetch("/api/admin/messages?limit=300", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      throw new Error(result.message || "Failed to load messages.");
    }
    allMessages = result.items || [];
    renderMessages(allMessages);
    setStatus("Inbox loaded.");
  } catch (error) {
    allMessages = [];
    renderMessages([]);
    setStatus(error.message || "Unable to load inbox.", true);
  }
}

async function deleteMessage(id) {
  const token = getToken();
  if (!token) {
    setStatus("Admin token missing.", true);
    return;
  }
  try {
    const response = await fetch(`/api/admin/messages/${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      throw new Error(result.message || "Failed to delete.");
    }
    setStatus("Message deleted.");
    fetchMessages();
  } catch (error) {
    setStatus(error.message || "Delete failed.", true);
  }
}

saveTokenBtn.addEventListener("click", () => {
  const value = tokenInput.value.trim();
  if (!value) {
    setStatus("Please enter a token.", true);
    return;
  }
  setToken(value);
  setStatus("Token saved.");
  fetchMessages();
});

clearTokenBtn.addEventListener("click", () => {
  localStorage.removeItem("admin_token");
  tokenInput.value = "";
  messagesContainer.innerHTML = "";
  setStatus("Token cleared.");
  countBadge.textContent = "0 messages";
});

refreshBtn.addEventListener("click", () => {
  fetchMessages();
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    renderMessages(allMessages);
    return;
  }
  const filtered = allMessages.filter((item) => {
    const blob = `${item.name} ${item.email} ${item.message} ${item.source}`.toLowerCase();
    return blob.includes(q);
  });
  renderMessages(filtered);
});

messagesContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  if (target.matches(".delete-btn")) {
    const id = target.dataset.id;
    if (id) {
      deleteMessage(id);
    }
  }
});

tokenInput.value = getToken();
fetchMessages();
