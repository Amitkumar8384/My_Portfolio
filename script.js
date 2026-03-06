const GITHUB_USER = "Amitkumar8384";

const featuredProjects = [
  {
    title: "Freshnut E-commerce Website",
    description: "Responsive e-commerce website with dynamic product listing, reusable UI blocks, and local-storage cart.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
    tech: ["HTML5", "CSS3", "JavaScript ES6", "Local Storage"],
    live: "#",
    github: "#",
    source: "Resume Project"
  },
  {
    title: "To-Do List Application",
    description: "Task management app with CRUD operations, DOM event handling, and persistent data using Local Storage API.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80",
    tech: ["HTML5", "CSS3", "JavaScript ES6", "DOM"],
    live: "#",
    github: "#",
    source: "Resume Project"
  },
  {
    title: "AI Dashboard Monitoring UI",
    description: "Data-focused dashboard interface pattern inspired by real-time AI event monitoring workflow.",
    image: "https://images.unsplash.com/photo-1551281044-8d8d7fef9c9f?auto=format&fit=crop&w=900&q=80",
    tech: ["JavaScript", "Angular", "Responsive UI"],
    live: "#",
    github: "#",
    source: "Experience Based"
  }
];

const body = document.body;
const loader = document.getElementById("loader");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle?.querySelector("i");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const mainNav = document.getElementById("mainNav");
const navAnchors = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");
const scrollProgress = document.getElementById("scrollProgress");
const navBackdrop = document.getElementById("navBackdrop");
const backToTop = document.getElementById("backToTop");
const projectsGrid = document.getElementById("projectsGrid");
const githubStatsList = document.getElementById("githubStatsList");
const contribGraph = document.getElementById("contribGraph");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const contactSubmitBtn = document.getElementById("contactSubmitBtn");
const siteHeader = document.querySelector(".site-header");
const profilePhotos = document.querySelectorAll(".profile-photo");
const skillCounters = document.querySelectorAll(".skill-counter");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

window.addEventListener("load", () => {
  loader?.classList.add("hidden");
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function safeExternalUrl(url) {
  try {
    const parsed = new URL(url, window.location.href);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.href;
    }
  } catch {
    return "#";
  }
  return "#";
}

function initProfileImageFallback() {
  profilePhotos.forEach((img) => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      const placeholder = img.nextElementSibling;
      if (placeholder instanceof HTMLElement) {
        placeholder.style.display = "grid";
      }
    });
  });
}

function initSkillCounters() {
  if (!skillCounters.length) {
    return;
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const el = entry.target;
        const target = Number(el.dataset.target || 0);
        if (!Number.isFinite(target) || target <= 0) {
          return;
        }
        let value = 0;
        const duration = 950;
        const stepTime = 16;
        const steps = Math.max(1, Math.round(duration / stepTime));
        const increment = target / steps;
        const timer = setInterval(() => {
          value += increment;
          if (value >= target) {
            value = target;
            clearInterval(timer);
          }
          el.textContent = String(Math.round(value));
        }, stepTime);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  skillCounters.forEach((counter) => counterObserver.observe(counter));
}

function setThemeIcon() {
  if (!themeIcon || !themeToggle) {
    return;
  }
  const isLight = body.classList.contains("light-mode");
  // Requested behavior: dark mode => light icon, light mode => dark icon
  themeIcon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.setAttribute("title", isLight ? "Switch to dark mode" : "Switch to light mode");
}

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
  body.classList.add("light-mode");
}
setThemeIcon();

themeToggle?.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");
  localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
  setThemeIcon();
  setGitHubGraph();
});

function setMenuOpen(isOpen) {
  if (!navLinks || !menuToggle) {
    return;
  }
  navLinks.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  body.classList.toggle("menu-open", isOpen);
  navBackdrop?.classList.toggle("show", isOpen);
}

function ensureScrollUnlocked() {
  if (window.innerWidth > 1020) {
    setMenuOpen(false);
  }
}

menuToggle?.addEventListener("click", () => {
  const isOpen = !navLinks?.classList.contains("open");
  setMenuOpen(Boolean(isOpen));
});

navBackdrop?.addEventListener("click", () => {
  setMenuOpen(false);
});

navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
  });
});

document.addEventListener("click", (event) => {
  if (!navLinks?.classList.contains("open")) {
    return;
  }
  const target = event.target;
  if (!(target instanceof Node)) {
    return;
  }
  const clickedInsideNav = mainNav?.contains(target) || menuToggle?.contains(target);
  if (!clickedInsideNav) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

window.addEventListener("resize", ensureScrollUnlocked, { passive: true });
window.addEventListener("pageshow", ensureScrollUnlocked);
ensureScrollUnlocked();

// Premium section snapping behavior: nav click aligns section with sticky header offset.
function scrollToSection(hash) {
  const target = document.querySelector(hash);
  const header = document.querySelector(".site-header");
  if (!target || !header) {
    return;
  }
  const offset = header.getBoundingClientRect().height + 16;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
  target.classList.remove("section-focus");
  requestAnimationFrame(() => target.classList.add("section-focus"));
  setTimeout(() => target.classList.remove("section-focus"), 750);
}

navAnchors.forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    if (!hash || !hash.startsWith("#")) {
      return;
    }
    event.preventDefault();
    scrollToSection(hash);
    history.replaceState(null, "", hash);
  });
});

const anchorSectionPairs = Array.from(navAnchors)
  .map((anchor) => {
    const hash = anchor.getAttribute("href");
    if (!hash || !hash.startsWith("#")) {
      return null;
    }
    const section = document.querySelector(hash);
    if (!section) {
      return null;
    }
    return { anchor, section };
  })
  .filter(Boolean);

function updateActiveNav() {
  const header = document.querySelector(".site-header");
  const offset = (header?.getBoundingClientRect().height || 0) + 24;
  const marker = window.scrollY + offset;

  let activePair = null;
  for (const pair of anchorSectionPairs) {
    const top = pair.section.offsetTop;
    const bottom = top + pair.section.offsetHeight;
    if (marker >= top && marker < bottom) {
      activePair = pair;
      break;
    }
  }

  // If marker is above first section, keep first nav item active for stable UX.
  if (!activePair && anchorSectionPairs.length > 0 && marker < anchorSectionPairs[0].section.offsetTop) {
    activePair = anchorSectionPairs[0];
  }

  navAnchors.forEach((anchor) => {
    anchor.classList.toggle("active", activePair?.anchor === anchor);
  });

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.72 && rect.bottom > window.innerHeight * 0.22;
    section.classList.toggle("in-view", inView);
  });
}

function updateScrollProgress() {
  if (!scrollProgress) {
    return;
  }
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  scrollProgress.style.width = `${percent}%`;
  if (backToTop) {
    backToTop.classList.toggle("show", percent > 18);
  }
  siteHeader?.classList.toggle("scrolled", percent > 1);
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("resize", updateActiveNav);
updateScrollProgress();
updateActiveNav();

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

function observeRevealElements() {
  document.querySelectorAll(".reveal").forEach((el, idx) => {
    el.style.setProperty("--d", `${Math.min(idx * 24, 180)}ms`);
    el.dataset.reveal = "up";
    revealObserver.observe(el);
  });
}

observeRevealElements();

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

if (!reducedMotion && !isTouchDevice) {
  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });
}

function animateCursor() {
  outlineX += (mouseX - outlineX) * 0.16;
  outlineY += (mouseY - outlineY) * 0.16;
  if (cursorOutline) {
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;
  }
  requestAnimationFrame(animateCursor);
}
if (!reducedMotion && !isTouchDevice) {
  animateCursor();
}

function setCursorHoverScale(scale) {
  if (cursorOutline) {
    cursorOutline.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }
}

document.addEventListener("mouseover", (event) => {
  if (event.target.closest("a, button, input, textarea")) {
    setCursorHoverScale(1.5);
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.closest("a, button, input, textarea")) {
    setCursorHoverScale(1);
  }
});

function applyTiltEffect(selector) {
  if (reducedMotion || isTouchDevice) {
    return;
  }
  document.querySelectorAll(selector).forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

function applyMagneticEffect(selector) {
  if (reducedMotion || isTouchDevice) {
    return;
  }
  document.querySelectorAll(selector).forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.12}px, ${y * 0.2}px)`;
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0, 0)";
    });
  });
}

function typeHeroLine() {
  const typedLine = document.getElementById("typedLine");
  if (!typedLine) {
    return;
  }

  const sentence = "I build modern and scalable web applications";
  let index = 0;
  typedLine.textContent = "";

  const interval = setInterval(() => {
    typedLine.textContent += sentence.charAt(index);
    index += 1;
    if (index >= sentence.length) {
      clearInterval(interval);
    }
  }, 42);
}

function createProjectCard(project, index) {
  const isFeatured = index === 0;
  const visibleTech = project.tech.slice(0, 4).map(escapeHtml);
  const title = escapeHtml(project.title);
  const description = escapeHtml(project.description);
  const image = safeExternalUrl(project.image);
  const liveUrl = safeExternalUrl(project.live);
  const githubUrl = safeExternalUrl(project.github);
  const source = escapeHtml(project.source);
  const cardStatus = project.source === "GitHub" ? "Live Repository" : "Featured Build";
  return `
    <article class="project-card ${isFeatured ? "featured" : ""} reveal tilt-card">
      <span class="project-badge">${source}</span>
      <div class="project-cover">
        <img src="${image}" alt="${title} preview" loading="lazy" decoding="async">
      </div>
      <div class="project-content">
        <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="project-meta">
          ${visibleTech.map((tag) => `<span class="meta-pill">${tag}</span>`).join("")}
        </div>
        <div class="project-footer">
          <span class="project-status">${cardStatus}</span>
          <div class="project-actions">
            <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary magnetic"><i class="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;Live</a>
            <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary magnetic"><i class="fa-brands fa-github"></i>&nbsp;Code</a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function inferProjectImage(repoName) {
  const lower = repoName.toLowerCase();
  if (lower.includes("weather")) {
    return "https://images.unsplash.com/photo-1530908295418-a12e326966ba?auto=format&fit=crop&w=900&q=80";
  }
  if (lower.includes("ecom") || lower.includes("shop")) {
    return "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80";
  }
  if (lower.includes("portfolio")) {
    return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80";
  }
  return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80";
}

async function fetchGitHubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`);
    if (!response.ok) {
      throw new Error("Unable to load GitHub repositories");
    }

    const repos = await response.json();
    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .slice(0, 6)
      .map((repo) => ({
        title: repo.name,
        description: repo.description || "Production-ready repository with clean structure and iterative improvements.",
        image: inferProjectImage(repo.name),
        tech: [repo.language || "JavaScript", "Git", "GitHub"],
        live: repo.homepage && repo.homepage.trim() !== "" ? repo.homepage : repo.html_url,
        github: repo.html_url,
        source: "GitHub"
      }));
  } catch (error) {
    return [];
  }
}

async function renderProjects() {
  if (!projectsGrid) {
    return;
  }

  projectsGrid.innerHTML = `
    <article class="project-card skeleton" aria-hidden="true"></article>
    <article class="project-card skeleton" aria-hidden="true"></article>
  `;
  const githubProjects = await fetchGitHubRepos();
  const allProjects = [...featuredProjects, ...githubProjects];

  const unique = [];
  const usedTitles = new Set();
  allProjects.forEach((project) => {
    const titleKey = project.title.toLowerCase();
    if (!usedTitles.has(titleKey)) {
      usedTitles.add(titleKey);
      unique.push(project);
    }
  });

  projectsGrid.innerHTML = unique.map((project, index) => createProjectCard(project, index)).join("");
  observeRevealElements();
  applyTiltEffect(".tilt-card");
  applyMagneticEffect(".magnetic");
}

async function loadGitHubStats() {
  setGitHubGraph();

  if (!githubStatsList) {
    return;
  }

  githubStatsList.innerHTML = `
    <article class="stat-card skeleton" aria-hidden="true"></article>
    <article class="stat-card skeleton" aria-hidden="true"></article>
    <article class="stat-card skeleton" aria-hidden="true"></article>
    <article class="stat-card skeleton" aria-hidden="true"></article>
  `;

  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`)
    ]);

    if (!profileResponse.ok || !reposResponse.ok) {
      throw new Error("Unable to fetch profile stats");
    }

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    const languageCount = repos.reduce((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {});

    const topLanguage = Object.entries(languageCount)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || "JavaScript";

    const recentlyUpdated = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 3)
      .map((repo) => repo.name)
      .join(", ");

    githubStatsList.innerHTML = `
      <article class="stat-card tilt-card">
        <span class="stat-label">Public Repositories</span>
        <span class="stat-value">${profile.public_repos}</span>
      </article>
      <article class="stat-card tilt-card">
        <span class="stat-label">Followers</span>
        <span class="stat-value">${profile.followers}</span>
      </article>
      <article class="stat-card tilt-card">
        <span class="stat-label">Following</span>
        <span class="stat-value">${profile.following}</span>
      </article>
      <article class="stat-card tilt-card">
        <span class="stat-label">Top Language</span>
        <span class="stat-value">${topLanguage}</span>
      </article>
      <article class="stat-card wide tilt-card">
        <span class="stat-label">Recently Updated Repos</span>
        <span class="stat-value">${recentlyUpdated || "No recent public repositories"}</span>
      </article>
    `;
    applyTiltEffect(".tilt-card");
  } catch (error) {
    githubStatsList.innerHTML = `
      <article class="stat-card wide">
        <span class="stat-label">GitHub Status</span>
        <span class="stat-value">Stats unavailable right now.</span>
      </article>
    `;
  }
}

function setGitHubGraph() {
  if (!contribGraph) {
    return;
  }
  const isLight = body.classList.contains("light-mode");
  const themeParams = isLight
    ? "bg_color=f4f7ff&color=39538a&line=1d66da&point=0f9f7b&area=true&hide_border=true"
    : "bg_color=0b1324&color=90a7d6&line=31dea6&point=4f8fff&area=true&hide_border=true";

  const primary = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USER}&${themeParams}`;
  const fallback = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&hide_border=true&rank_icon=github&theme=${isLight ? "default" : "github_dark"}`;

  contribGraph.onerror = () => {
    if (contribGraph.src !== fallback) {
      contribGraph.src = fallback;
    }
  };
  contribGraph.src = primary;
}

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const nameValue = String(formData.get("name") || "").trim();
  const emailValue = String(formData.get("email") || "").trim();
  const messageValue = String(formData.get("message") || "").trim();
  const companyTrap = String(formData.get("company") || "").trim();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  [nameInput, emailInput, messageInput].forEach((field) => field?.classList.remove("is-invalid"));
  formStatus?.classList.remove("error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (nameValue.length < 2) {
    nameInput?.classList.add("is-invalid");
    formStatus.textContent = "Please enter a valid name (at least 2 characters).";
    formStatus?.classList.add("error");
    return;
  }
  if (!emailPattern.test(emailValue)) {
    emailInput?.classList.add("is-invalid");
    formStatus.textContent = "Please enter a valid email address.";
    formStatus?.classList.add("error");
    return;
  }
  if (messageValue.length < 10) {
    messageInput?.classList.add("is-invalid");
    formStatus.textContent = "Message should be at least 10 characters.";
    formStatus?.classList.add("error");
    return;
  }

  if (companyTrap !== "") {
    formStatus.textContent = "Thanks! Your message has been submitted.";
    formStatus?.classList.remove("error");
    contactForm.reset();
    return;
  }

  try {
    if (contactSubmitBtn) {
      contactSubmitBtn.disabled = true;
      contactSubmitBtn.textContent = "Sending...";
    }
    formStatus.textContent = "Submitting your message...";
    formStatus?.classList.remove("error");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        message: messageValue,
        source: "portfolio"
      })
    });

    const result = await response.json().catch(() => ({ ok: false, message: "Unexpected server response." }));
    if (!response.ok || !result.ok) {
      throw new Error(result.message || "Unable to submit message.");
    }

    formStatus.textContent = "Message sent successfully. Thanks for contacting me.";
    contactForm.reset();
  } catch (error) {
    formStatus.textContent = error.message || "Could not send message. Please try again.";
    formStatus?.classList.add("error");
  } finally {
    if (contactSubmitBtn) {
      contactSubmitBtn.disabled = false;
      contactSubmitBtn.textContent = "Send Message";
    }
  }
});

function runParticleBackground() {
  if (reducedMotion) {
    return;
  }

  const canvas = document.getElementById("particleCanvas");
  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  const particles = [];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resize();
  window.addEventListener("resize", resize);

  const count = isTouchDevice
    ? Math.min(45, Math.floor(window.innerWidth / 20))
    : Math.min(80, Math.floor(window.innerWidth / 18));

  for (let i = 0; i < count; i += 1) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4
    });
  }

  let isRunning = true;

  const draw = () => {
    if (!isRunning) {
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(108, 151, 255, 0.45)";
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(49, 222, 166, ${0.12 - dist / 900})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  };

  document.addEventListener("visibilitychange", () => {
    isRunning = !document.hidden;
    if (isRunning) {
      requestAnimationFrame(draw);
    }
  });

  draw();
}

runParticleBackground();
typeHeroLine();
renderProjects();
loadGitHubStats();
applyTiltEffect(".tilt-card");
applyMagneticEffect(".magnetic");
initProfileImageFallback();
initSkillCounters();
