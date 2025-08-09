// To Show greeting based on time
function updateGreeting() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  const el = document.getElementById("greeting");
  if (el) el.textContent = greeting;
}

function updateTime() {
  const now = new Date();
  const el = document.getElementById("time");
  if (el) el.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function updateYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setupNavToggle() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  // Close menu when clicking a link (mobile)
  document.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    });
  });
}

window.addEventListener("load", () => {
  updateGreeting();
  updateTime();
  updateYear();
  setInterval(updateTime, 30_000);
  setupNavToggle();
  setupSmoothScroll();
});
