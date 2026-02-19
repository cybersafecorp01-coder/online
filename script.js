const topbar = document.querySelector(".topbar");
const toggle = document.querySelector(".menu-toggle");
const waUrl = "https://wa.me/5511961244602?text=Ol%C3%A1%2C%20desejo%20um%20atendimento";

if (toggle && topbar) {
  toggle.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

document.querySelectorAll(".wa-action").forEach((el) => {
  if (el.tagName === "A") {
    el.setAttribute("href", waUrl);
  } else {
    el.addEventListener("click", () => {
      window.open(waUrl, "_blank");
    });
  }
});

document.querySelectorAll('.menu a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (topbar) {
      topbar.classList.remove("open");
    }
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
