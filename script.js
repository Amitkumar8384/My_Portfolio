const GITHUB_USER = "Amitkumar8384";

const featuredProjects = [
  {
    slug: "freshnut-ecommerce",
    title: "Freshnut E-commerce Website",
    description: "Responsive e-commerce website with dynamic product listing, reusable UI blocks, and local-storage cart.",
    image: "./images/image.png",
    tech: ["HTML5", "CSS3", "JavaScript ES6", "Local Storage"],
    live: "https://amitkumar8384.github.io/FreshNut/",
    github: "https://github.com/Amitkumar8384/FreshNut",
    source: "Resume Project",
    category: "frontend",
    stars: null,
    forks: null,
    caseStudy: {
      problem: "Need tha ek simple but conversion-focused e-commerce frontend jo fast load ho aur mobile me smooth chale.",
      approach: "Reusable UI blocks, localStorage cart, and clear product discovery flow build kiya with lightweight vanilla JS.",
      impact: "Catalog browsing and cart flow friction kam hua; demo deployments aur recruiter reviews me project highlight bana.",
      stack: "HTML5, CSS3, JavaScript, LocalStorage"
    }
  },
  {
    slug: "todo-list-app",
    title: "To-Do List Application",
    description: "Task management app with CRUD operations, DOM event handling, and persistent data using Local Storage API.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80",
    tech: ["HTML5", "CSS3", "JavaScript ES6", "DOM"],
    live: "#",
    github: "#",
    source: "Resume Project",
    category: "frontend",
    stars: null,
    forks: null,
    caseStudy: {
      problem: "Daily task tracking ke liye clean CRUD workflow chahiye tha with zero backend dependency.",
      approach: "Event-driven DOM updates, input validation, and local storage sync use kiya for reliable persistence.",
      impact: "Fast prototype se productivity demo ready hua and JavaScript fundamentals strongly showcase hue.",
      stack: "HTML5, CSS3, JavaScript, LocalStorage"
    }
  },
  {
    slug: "ai-dashboard-monitoring-ui",
    title: "AI Dashboard Monitoring UI",
    description: "Data-focused dashboard interface pattern inspired by real-time AI event monitoring workflow.",
    image: "https://images.unsplash.com/photo-1551281044-8d8d7fef9c9f?auto=format&fit=crop&w=900&q=80",
    tech: ["JavaScript", "Angular", "Responsive UI"],
    live: "#",
    github: "#",
    source: "Experience Based",
    category: "dashboard",
    stars: null,
    forks: null,
    caseStudy: {
      problem: "High-volume monitoring context me operators ko quick visual prioritization ki need thi.",
      approach: "Alert-focused card hierarchy, responsive grid, and dashboard readability patterns apply kiye.",
      impact: "Complex data ko glanceable format me convert karke triage speed improve hui.",
      stack: "JavaScript, Angular Patterns, Responsive UI"
    }
  }
];

// const services = [
//   {
//     title: "Portfolio Websites",
//     description: "Modern portfolio websites designed to showcase your work, attract recruiters, and highlight real projects with a polished UI.",
//     icon: "fa-laptop-code"
//   },
//   {
//     title: "Landing Pages",
//     description: "High-converting landing pages built to turn visitors into customers with clear CTAs, fast performance, and modern design.",
//     icon: "fa-bullseye"
//   },
//   {
//     title: "Dashboard UI",
//     description: "Clean and scalable dashboard interfaces for admin panels, analytics tools, and data-driven web applications.",
//     icon: "fa-chart-line"
//   },
//   {
//     title: "API Integration",
//     description: "Seamless frontend integration with REST APIs, enabling real-time data, secure communication, and smooth user experience.",
//     icon: "fa-plug-circle-check"
//   },
//   {
//     title: "UI Revamp",
//     description: "Modern redesign of outdated interfaces with improved usability, performance optimization, and better accessibility.",
//     icon: "fa-wand-magic-sparkles"
//   }
  
// ];
const services = [
  {
    title: "Portfolio Websites",
    description: "Modern portfolio websites designed to showcase your work, attract recruiters, and highlight real projects with a polished UI.",
    icon: "fa-laptop-code"
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages built to turn visitors into customers with clear CTAs, fast performance, and modern design.",
    icon: "fa-bullseye"
  },
  {
    title: "Dashboard UI",
    description: "Clean and scalable dashboard interfaces for admin panels, analytics tools, and data-driven web applications.",
    icon: "fa-chart-line"
  },
  {
    title: "API Integration",
    description: "Seamless frontend integration with REST APIs, enabling real-time data, secure communication, and smooth user experience.",
    icon: "fa-plug-circle-check"
  },
  {
    title: "UI Revamp",
    description: "Modern redesign of outdated interfaces with improved usability, performance optimization, and better accessibility.",
    icon: "fa-wand-magic-sparkles"
  },
  {
  title: "Responsive Web Development",
  description: "Mobile-first websites that look and perform perfectly across all devices including phones, tablets, and desktops.",
  icon: "fa-mobile-screen"
}
];
const testimonials = [
  {
    quote: "Amit delivered clean frontend work quickly and handled feedback without delay. The final UI felt production ready.",
    author: "Team Lead, Ziyyara Edutech",
    role: "Web Product Team"
  },
  {
    quote: "Strong ownership on responsive behavior and practical JavaScript solutions. Good communication across sprint handoffs.",
    author: "Operations Manager, Nayan India",
    role: "AI Dashboard Operations"
  },
  {
    quote: "He improved usability and visual clarity significantly while keeping implementation lightweight and maintainable.",
    author: "Peer Reviewer",
    role: "Frontend Collaboration"
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
const servicesGrid = document.getElementById("servicesGrid");
const testimonialsGrid = document.getElementById("testimonialsGrid");
const projectSpotlight = document.getElementById("projectSpotlight");
const projectFilters = document.getElementById("projectFilters");
const projectSearchInput = document.getElementById("projectSearchInput");
const viewAllProjectsBtn = document.getElementById("viewAllProjectsBtn");
const projectModal = document.getElementById("projectModal");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalSummary = document.getElementById("projectModalSummary");
const projectModalBody = document.getElementById("projectModalBody");
const projectModalCloseBtn = document.getElementById("projectModalCloseBtn");
const resumeDownloadBtn = document.getElementById("resumeDownloadBtn");
const resumeDownloadCount = document.getElementById("resumeDownloadCount");
const canonicalLink = document.getElementById("canonicalLink");
const ogUrlMeta = document.getElementById("ogUrlMeta");
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
const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const INITIAL_PROJECT_COUNT = 3;
let allRenderableProjects = [];
let showAllProjects = false;
let activeProjectFilter = "all";
let projectSearchQuery = "";
let lastFocusedElement = null;

function hideLoader() {
  loader?.classList.add("hidden");
}

if (!reducedMotion && !isTouchDevice && hasFinePointer) {
  body.classList.add("custom-cursor-enabled");
}

// Don't block first interaction on heavy assets (fonts/images/3rd-party requests).
if (document.readyState === "interactive" || document.readyState === "complete") {
  hideLoader();
} else {
  document.addEventListener("DOMContentLoaded", hideLoader, { once: true });
}
window.addEventListener("load", hideLoader, { once: true });
setTimeout(hideLoader, 1200);

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

function toTitleCase(value) {
  return String(value || "")
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatCompactNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0) {
    return null;
  }
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(number);
}

function normalizeProjectCategory(project) {
  if (project.category) {
    return String(project.category).toLowerCase();
  }
  const techBlob = (project.tech || []).join(" ").toLowerCase();
  if (techBlob.includes("node") || techBlob.includes("express") || techBlob.includes("mongodb")) {
    return "fullstack";
  }
  if (techBlob.includes("angular") || techBlob.includes("react") || techBlob.includes("dashboard")) {
    return "dashboard";
  }
  return "frontend";
}

function renderServices() {
  if (!servicesGrid) {
    return;
  }
  servicesGrid.innerHTML = services
    .map(
      (service) => `
        <article class="service-card glass reveal tilt-card">
          <div class="service-icon"><i class="fa-solid ${escapeHtml(service.icon)}"></i></div>
          <h3>${escapeHtml(service.title)}</h3>
          <p>${escapeHtml(service.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderTestimonials() {
  if (!testimonialsGrid) {
    return;
  }
  testimonialsGrid.innerHTML = testimonials
    .map(
      (item) => `
        <article class="testimonial-card glass reveal tilt-card">
          <p class="testimonial-quote">"${escapeHtml(item.quote)}"</p>
          <div class="testimonial-meta">
            <strong>${escapeHtml(item.author)}</strong>
            <span>${escapeHtml(item.role)}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function syncSeoUrls() {
  const url = `${window.location.origin}${window.location.pathname}`;
  if (canonicalLink instanceof HTMLLinkElement) {
    canonicalLink.href = url;
  }
  if (ogUrlMeta instanceof HTMLMetaElement) {
    ogUrlMeta.content = url;
  }
}

function updateResumeDownloadCountLabel() {
  if (!resumeDownloadCount) {
    return;
  }
  const count = Number(localStorage.getItem("resume_download_count") || 0);
  resumeDownloadCount.textContent = count > 0 ? `${count} downloads` : "";
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

resumeDownloadBtn?.addEventListener("click", () => {
  const current = Number(localStorage.getItem("resume_download_count") || 0);
  localStorage.setItem("resume_download_count", String(current + 1));
  updateResumeDownloadCountLabel();
});

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

if (!reducedMotion && !isTouchDevice && hasFinePointer) {
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
if (!reducedMotion && !isTouchDevice && hasFinePointer) {
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
    if (card.dataset.tiltBound === "true") {
      return;
    }
    card.dataset.tiltBound = "true";
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
    if (button.dataset.magneticBound === "true") {
      return;
    }
    button.dataset.magneticBound = "true";
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

  const sentence = "Building high-performance, responsive web experiences.";
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
  const visibleTech = project.tech.slice(0, 4).map(escapeHtml);
  const title = escapeHtml(project.title);
  const description = escapeHtml(project.description);
  const image = safeExternalUrl(project.image);
  const liveUrl = safeExternalUrl(project.live);
  const githubUrl = safeExternalUrl(project.github);
  const hasLive = liveUrl !== "#";
  const hasCode = githubUrl !== "#";
  const source = escapeHtml(project.source);
  const category = normalizeProjectCategory(project);
  const stars = formatCompactNumber(project.stars);
  const forks = formatCompactNumber(project.forks);
  const projectSlug = escapeHtml(getProjectSlug(project));
  const cardStatus = project.source === "GitHub" ? "Live Repository" : "Featured Build";
  return `
    <article class="project-card reveal tilt-card">
      <span class="project-badge">${source}</span>
      <div class="project-cover">
        <img src="${image}" alt="${title} preview" loading="lazy" decoding="async">
      </div>
      <div class="project-content">
        <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="project-insights">
          <span class="project-insight-chip"><i class="fa-solid fa-layer-group"></i>&nbsp;${toTitleCase(category)}</span>
          ${stars ? `<span class="project-insight-chip"><i class="fa-solid fa-star"></i>&nbsp;${stars}</span>` : ""}
          ${forks ? `<span class="project-insight-chip"><i class="fa-solid fa-code-fork"></i>&nbsp;${forks}</span>` : ""}
        </div>
        <div class="project-meta">
          ${visibleTech.map((tag) => `<span class="meta-pill">${tag}</span>`).join("")}
        </div>
        <div class="project-footer">
          <span class="project-status">${cardStatus}</span>
          <div class="project-actions">
            ${
              hasLive
                ? `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary magnetic"><i class="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;Live</a>`
                : `<button type="button" class="btn btn-primary is-disabled" disabled><i class="fa-solid fa-hourglass-half"></i>&nbsp;Live Soon</button>`
            }
            ${
              hasCode
                ? `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary magnetic"><i class="fa-brands fa-github"></i>&nbsp;Code</a>`
                : `<button type="button" class="btn btn-secondary is-disabled" disabled><i class="fa-solid fa-lock"></i>&nbsp;Private</button>`
            }
            <button type="button" class="btn btn-glass magnetic case-study-btn" data-project-slug="${projectSlug}"><i class="fa-regular fa-file-lines"></i>&nbsp;Case Study</button>
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

function normalizeTitle(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function mapFeaturedLinksFromRepos(projects, repos) {
  if (!Array.isArray(repos) || repos.length === 0) {
    return projects;
  }
  const repoByNormalizedName = new Map(
    repos.map((repo) => [normalizeTitle(repo?.name), repo]).filter(([key]) => key)
  );
  return projects.map((project) => {
    const needsGitHub = !project.github || project.github === "#";
    const needsLive = !project.live || project.live === "#";
    if (!needsGitHub && !needsLive) {
      return project;
    }
    const normalizedTitle = normalizeTitle(project.title);
    let matchedRepo = repoByNormalizedName.get(normalizedTitle);
    if (!matchedRepo) {
      matchedRepo = repos.find((repo) => {
        const repoKey = normalizeTitle(repo?.name);
        return normalizedTitle.includes(repoKey) || repoKey.includes(normalizedTitle);
      });
    }
    if (!matchedRepo) {
      return project;
    }
    return {
      ...project,
      github: needsGitHub ? matchedRepo.html_url || project.github : project.github,
      live: needsLive
        ? (matchedRepo.homepage && matchedRepo.homepage.trim() !== "" ? matchedRepo.homepage : matchedRepo.html_url || project.live)
        : project.live,
      stars: project.stars ?? matchedRepo.stargazers_count ?? null,
      forks: project.forks ?? matchedRepo.forks_count ?? null
    };
  });
}

function getProjectSlug(project) {
  return project.slug || String(project.title || "project").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getProjectBySlug(slug) {
  return allRenderableProjects.find((project) => getProjectSlug(project) === slug) || null;
}

function renderProjectFilters(items) {
  if (!projectFilters) {
    return;
  }
  const categories = ["all", ...new Set(items.map((item) => normalizeProjectCategory(item)))];
  if (!categories.includes(activeProjectFilter)) {
    activeProjectFilter = "all";
  }

  const query = projectSearchQuery.trim().toLowerCase();
  const getCountByCategory = (category) => {
    return items.filter((project) => {
      const categoryMatch = category === "all" || normalizeProjectCategory(project) === category;
      if (!categoryMatch) {
        return false;
      }
      if (!query) {
        return true;
      }
      const blob = `${project.title} ${project.description} ${(project.tech || []).join(" ")} ${project.source}`.toLowerCase();
      return blob.includes(query);
    }).length;
  };

  projectFilters.innerHTML = categories
    .map((category) => {
      const isActive = category === activeProjectFilter;
      const count = getCountByCategory(category);
      return `<button type="button" class="project-filter-chip${isActive ? " is-active" : ""}" data-filter="${escapeHtml(category)}" role="tab" aria-selected="${String(isActive)}"><span>${toTitleCase(category)}</span><em>${count}</em></button>`;
    })
    .join("");
}

function getFilteredProjects() {
  const query = projectSearchQuery.trim().toLowerCase();
  return allRenderableProjects.filter((project) => {
    const category = normalizeProjectCategory(project);
    const categoryMatch = activeProjectFilter === "all" || category === activeProjectFilter;
    if (!categoryMatch) {
      return false;
    }
    if (!query) {
      return true;
    }
    const blob = `${project.title} ${project.description} ${(project.tech || []).join(" ")} ${project.source}`.toLowerCase();
    return blob.includes(query);
  });
}

function renderProjectSpotlight(project) {
  if (!projectSpotlight) {
    return;
  }
  if (!project) {
    projectSpotlight.innerHTML = "";
    return;
  }

  const monthLabel = new Date().toLocaleString("en-US", { month: "long", year: "numeric" });
  const slug = escapeHtml(getProjectSlug(project));
  const stars = formatCompactNumber(project.stars);
  const forks = formatCompactNumber(project.forks);
  const liveUrl = safeExternalUrl(project.live);
  const githubUrl = safeExternalUrl(project.github);

  projectSpotlight.innerHTML = `
    <div class="spotlight-media">
      <img src="${safeExternalUrl(project.image)}" alt="${escapeHtml(project.title)} spotlight preview" loading="lazy" decoding="async">
    </div>
    <div class="spotlight-content">
      <p class="spotlight-eyebrow">Project Of The Month · ${escapeHtml(monthLabel)}</p>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <div class="spotlight-stats">
        <span class="project-insight-chip"><i class="fa-solid fa-layer-group"></i>&nbsp;${toTitleCase(normalizeProjectCategory(project))}</span>
        ${stars ? `<span class="project-insight-chip"><i class="fa-solid fa-star"></i>&nbsp;${stars}</span>` : ""}
        ${forks ? `<span class="project-insight-chip"><i class="fa-solid fa-code-fork"></i>&nbsp;${forks}</span>` : ""}
      </div>
      <div class="spotlight-actions">
        <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary magnetic">Visit Live</a>
        <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary magnetic">View Code</a>
        <button type="button" class="btn btn-glass magnetic case-study-btn" data-project-slug="${slug}">Case Study</button>
      </div>
    </div>
  `;
}

function openProjectModal(project) {
  if (!projectModal || !projectModalTitle || !projectModalSummary || !projectModalBody) {
    return;
  }
  const fallbackCase = {
    problem: "Project objective and business context were defined around usability and clear execution.",
    approach: "Built with incremental iterations, reusable components, and practical engineering tradeoffs.",
    impact: "Delivered a working product experience with measurable value for demos and portfolio showcase.",
    stack: (project.tech || []).join(", ")
  };
  const details = project.caseStudy || fallbackCase;
  const galleryImages = Array.isArray(project.gallery) && project.gallery.length
    ? project.gallery
    : [project.image];
  const safeGallery = galleryImages.map((img) => safeExternalUrl(img)).filter((img) => img !== "#");
  const mainImage = safeGallery[0] || safeExternalUrl(project.image);
  projectModalTitle.textContent = `${project.title} · Case Study`;
  projectModalSummary.textContent = project.description;
  projectModalBody.innerHTML = `
    <section class="project-modal-gallery">
      <div class="project-modal-main-image-wrap">
        <img id="projectModalMainImage" src="${mainImage}" alt="${escapeHtml(project.title)} screenshot" class="project-modal-main-image" loading="lazy" decoding="async">
        <button type="button" class="project-modal-nav-btn prev" data-modal-nav="-1" aria-label="Previous screenshot">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button type="button" class="project-modal-nav-btn next" data-modal-nav="1" aria-label="Next screenshot">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div class="project-modal-thumbs">
        ${safeGallery
          .map(
            (img, idx) =>
              `<button type="button" class="project-modal-thumb${idx === 0 ? " is-active" : ""}" data-modal-image="${img}" aria-label="Open screenshot ${idx + 1}">
                 <img src="${img}" alt="${escapeHtml(project.title)} thumbnail ${idx + 1}" loading="lazy" decoding="async">
               </button>`
          )
          .join("")}
      </div>
    </section>
    <article><h4>Problem</h4><p>${escapeHtml(details.problem || fallbackCase.problem)}</p></article>
    <article><h4>Approach</h4><p>${escapeHtml(details.approach || fallbackCase.approach)}</p></article>
    <article><h4>Impact</h4><p>${escapeHtml(details.impact || fallbackCase.impact)}</p></article>
    <article><h4>Stack</h4><p>${escapeHtml(details.stack || fallbackCase.stack)}</p></article>
  `;
  updateModalGalleryNav();
  lastFocusedElement = document.activeElement;
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
  projectModalCloseBtn?.focus();
}

function closeProjectModal() {
  if (!projectModal) {
    return;
  }
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");
  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function setActiveModalImage(nextImage, activeThumb) {
  if (!projectModal || !nextImage) {
    return;
  }
  const mainImage = projectModal.querySelector("#projectModalMainImage");
  if (mainImage instanceof HTMLImageElement) {
    mainImage.src = nextImage;
  }
  projectModal.querySelectorAll(".project-modal-thumb").forEach((el) => el.classList.remove("is-active"));
  if (activeThumb instanceof HTMLElement) {
    activeThumb.classList.add("is-active");
  }
}

function updateModalGalleryNav() {
  if (!projectModal) {
    return;
  }
  const thumbCount = projectModal.querySelectorAll(".project-modal-thumb").length;
  const hasMultiple = thumbCount > 1;
  projectModal.querySelectorAll(".project-modal-nav-btn").forEach((btn) => {
    if (btn instanceof HTMLButtonElement) {
      btn.disabled = !hasMultiple;
      btn.hidden = !hasMultiple;
    }
  });
}

function moveModalGallery(direction) {
  if (!projectModal) {
    return;
  }
  const thumbs = Array.from(projectModal.querySelectorAll(".project-modal-thumb"));
  if (thumbs.length <= 1) {
    return;
  }
  const currentIndex = Math.max(0, thumbs.findIndex((el) => el.classList.contains("is-active")));
  const nextIndex = (currentIndex + direction + thumbs.length) % thumbs.length;
  const nextThumb = thumbs[nextIndex];
  if (!(nextThumb instanceof HTMLElement)) {
    return;
  }
  const nextImage = String(nextThumb.dataset.modalImage || "");
  setActiveModalImage(nextImage, nextThumb);
}

async function fetchGitHubRepos() {
  try {
    const response = await fetch(`/api/github/repos?user=${encodeURIComponent(GITHUB_USER)}`);
    if (!response.ok) {
      throw new Error("Unable to load GitHub repositories");
    }

    const result = await response.json();
    const repos = Array.isArray(result?.items) ? result.items : [];
    const items = repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at) - new Date(a.updated_at);
      })
      .slice(0, 6)
      .map((repo) => ({
        slug: `gh-${repo.id}`,
        title: repo.name,
        description: repo.description || "Production-ready repository with clean structure and iterative improvements.",
        image: inferProjectImage(repo.name),
        tech: [repo.language || "JavaScript", "Git", "GitHub"],
        live: repo.homepage && repo.homepage.trim() !== "" ? repo.homepage : repo.html_url,
        github: repo.html_url,
        source: "GitHub",
        category: normalizeProjectCategory({ tech: [repo.language || "JavaScript", ...(repo.topics || [])] }),
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        caseStudy: {
          problem: "Repository me maintainable and production-friendly structure preserve karna with frequent iteration.",
          approach: "Modular commits, readable code organization, and progressive feature delivery approach follow kiya.",
          impact: "Open-source visibility improve hui with clearer code quality signals for recruiters and collaborators.",
          stack: `${repo.language || "JavaScript"}, Git, GitHub`
        }
      }));
    return { items, raw: repos };
  } catch (error) {
    return { items: [], raw: [] };
  }
}

async function renderProjects() {
  if (!projectsGrid) {
    return;
  }

  // Render featured projects immediately; enrich with GitHub projects in background.
  allRenderableProjects = [...featuredProjects];
  showAllProjects = false;
  renderProjectFilters(allRenderableProjects);
  renderProjectsList();

  const { items: githubProjects, raw: rawRepos } = await fetchGitHubRepos();
  const featuredWithRealLinks = mapFeaturedLinksFromRepos(featuredProjects, rawRepos);
  const unique = [];
  const usedTitles = new Set();
  [...featuredWithRealLinks, ...githubProjects].forEach((project) => {
    const titleKey = project.title.toLowerCase();
    if (!usedTitles.has(titleKey)) {
      usedTitles.add(titleKey);
      unique.push(project);
    }
  });

  allRenderableProjects = unique;
  renderProjectFilters(allRenderableProjects);
  renderProjectsList();
}

function renderProjectsList() {
  if (!projectsGrid) {
    return;
  }
  const filteredProjects = getFilteredProjects();
  const items = showAllProjects ? filteredProjects : filteredProjects.slice(0, INITIAL_PROJECT_COUNT);
  projectsGrid.innerHTML = items.length
    ? items.map((project, index) => createProjectCard(project, index)).join("")
    : `<article class="project-card glass"><div class="project-content"><h3>No projects found</h3><p>Try another keyword or filter to view matching projects.</p></div></article>`;
  renderProjectSpotlight(filteredProjects[0] || allRenderableProjects[0]);
  if (viewAllProjectsBtn) {
    const hasMore = filteredProjects.length > INITIAL_PROJECT_COUNT;
    viewAllProjectsBtn.hidden = !hasMore;
    viewAllProjectsBtn.textContent = showAllProjects ? "Show Top 3" : "View All Projects";
    viewAllProjectsBtn.setAttribute("aria-expanded", String(showAllProjects));
  }
  observeRevealElements();
  applyTiltEffect(".tilt-card");
  applyMagneticEffect(".magnetic");
}

viewAllProjectsBtn?.addEventListener("click", () => {
  showAllProjects = !showAllProjects;
  renderProjectsList();
});

projectFilters?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  const button = target.closest("[data-filter]");
  if (!(button instanceof HTMLElement)) {
    return;
  }
  activeProjectFilter = String(button.dataset.filter || "all");
  showAllProjects = false;
  renderProjectFilters(allRenderableProjects);
  renderProjectsList();
});

projectSearchInput?.addEventListener("input", () => {
  projectSearchQuery = projectSearchInput.value || "";
  showAllProjects = false;
  renderProjectFilters(allRenderableProjects);
  renderProjectsList();
});

projectsGrid?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  const trigger = target.closest(".case-study-btn");
  if (!(trigger instanceof HTMLElement)) {
    return;
  }
  const slug = String(trigger.dataset.projectSlug || "");
  const project = getProjectBySlug(slug);
  if (project) {
    openProjectModal(project);
  }
});

projectSpotlight?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  const trigger = target.closest(".case-study-btn");
  if (!(trigger instanceof HTMLElement)) {
    return;
  }
  const slug = String(trigger.dataset.projectSlug || "");
  const project = getProjectBySlug(slug);
  if (project) {
    openProjectModal(project);
  }
});

projectModalCloseBtn?.addEventListener("click", closeProjectModal);
projectModal?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  if (target.matches("[data-close-project-modal]")) {
    closeProjectModal();
    return;
  }
  const navButton = target.closest("[data-modal-nav]");
  if (navButton instanceof HTMLElement) {
    const step = Number(navButton.dataset.modalNav || "0");
    if (step !== 0) {
      moveModalGallery(step);
    }
    return;
  }
  const thumb = target.closest("[data-modal-image]");
  if (thumb instanceof HTMLElement) {
    const nextImage = String(thumb.dataset.modalImage || "");
    if (nextImage) {
      setActiveModalImage(nextImage, thumb);
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModal?.classList.contains("is-open")) {
    closeProjectModal();
    return;
  }
  if (!projectModal?.classList.contains("is-open")) {
    return;
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveModalGallery(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    moveModalGallery(1);
  }
});

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
    let profile = null;
    let topLanguage = "JavaScript";
    let recentlyUpdated = "";

    try {
      const response = await fetch(`/api/github/stats?user=${encodeURIComponent(GITHUB_USER)}`);
      if (!response.ok) {
        throw new Error("Proxy unavailable");
      }
      const result = await response.json();
      if (!result?.ok) {
        throw new Error("Proxy unavailable");
      }
      profile = result.profile || {};
      topLanguage = result.topLanguage || "JavaScript";
      recentlyUpdated = Array.isArray(result.recentlyUpdated) ? result.recentlyUpdated.join(", ") : "";
    } catch {
      const [profileResult, reposResult] = await Promise.allSettled([
        fetch(`https://api.github.com/users/${GITHUB_USER}`),
        fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`)
      ]);

      const profileResponse = profileResult.status === "fulfilled" ? profileResult.value : null;
      const reposResponse = reposResult.status === "fulfilled" ? reposResult.value : null;
      const profileData = profileResponse?.ok ? await profileResponse.json() : null;
      const repos = reposResponse?.ok ? await reposResponse.json() : [];

      if (!profileData && !Array.isArray(repos)) {
        throw new Error("Unable to fetch profile stats");
      }

      profile = profileData || {};
      const languageCount = (Array.isArray(repos) ? repos : []).reduce((acc, repo) => {
        if (repo?.language) {
          acc[repo.language] = (acc[repo.language] || 0) + 1;
        }
        return acc;
      }, {});
      topLanguage = Object.entries(languageCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "JavaScript";
      recentlyUpdated = (Array.isArray(repos) ? repos : [])
        .filter((repo) => repo && !repo.fork)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 3)
        .map((repo) => repo.name)
        .join(", ");
    }

    githubStatsList.innerHTML = `
      <article class="stat-card tilt-card">
        <span class="stat-label">Public Repositories</span>
        <span class="stat-value">${profile?.public_repos ?? "--"}</span>
      </article>
      <article class="stat-card tilt-card">
        <span class="stat-label">Followers</span>
        <span class="stat-value">${profile?.followers ?? "--"}</span>
      </article>
      <article class="stat-card tilt-card">
        <span class="stat-label">Following</span>
        <span class="stat-value">${profile?.following ?? "--"}</span>
      </article>
      <article class="stat-card tilt-card">
        <span class="stat-label">Top Language</span>
        <span class="stat-value">${topLanguage || "N/A"}</span>
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

function initHeroParallax() {
  if (reducedMotion || isTouchDevice) {
    return;
  }
  const hero = document.getElementById("hero");
  const layers = Array.from(document.querySelectorAll(".hero-parallax-layer"));
  const heroCard = document.querySelector(".hero-card");
  if (!(hero instanceof HTMLElement) || layers.length === 0) {
    return;
  }

  let rafId = null;
  const state = { x: 0, y: 0 };

  const applyTransforms = () => {
    rafId = null;
    layers.forEach((layer, index) => {
      const depth = (index + 1) * 0.55;
      layer.style.transform = `translate(${state.x * depth}px, ${state.y * depth}px)`;
    });
    if (heroCard instanceof HTMLElement) {
      heroCard.style.transform = `translate(${state.x * 0.4}px, ${state.y * 0.4}px)`;
    }
  };

  hero.addEventListener("mousemove", (event) => {
    const rect = hero.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    state.x = nx * 18;
    state.y = ny * 14;
    if (rafId === null) {
      rafId = requestAnimationFrame(applyTransforms);
    }
  });

  hero.addEventListener("mouseleave", () => {
    state.x = 0;
    state.y = 0;
    if (rafId === null) {
      rafId = requestAnimationFrame(applyTransforms);
    }
  });
}

runParticleBackground();
initHeroParallax();
typeHeroLine();
syncSeoUrls();
updateResumeDownloadCountLabel();
renderServices();
renderTestimonials();
renderProjects();
const githubSection = document.getElementById("github");
let githubStatsLoaded = false;
const loadGitHubStatsOnce = () => {
  if (githubStatsLoaded) {
    return;
  }
  githubStatsLoaded = true;
  loadGitHubStats();
};
if (githubSection && "IntersectionObserver" in window) {
  const githubObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        loadGitHubStatsOnce();
        githubObserver.disconnect();
      }
    },
    { threshold: 0.2 }
  );
  githubObserver.observe(githubSection);
} else if ("requestIdleCallback" in window) {
  window.requestIdleCallback(loadGitHubStatsOnce, { timeout: 2000 });
} else {
  setTimeout(loadGitHubStatsOnce, 250);
}
setTimeout(loadGitHubStatsOnce, 1800);
applyTiltEffect(".tilt-card");
applyMagneticEffect(".magnetic");
initProfileImageFallback();
initSkillCounters();
