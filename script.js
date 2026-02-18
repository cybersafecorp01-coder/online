const topbar = document.querySelector(".topbar");
const toggle = document.querySelector(".menu-toggle");
const waUrl = "https://wa.me/5511961244602?text=Ol%C3%A1%2C%20desejo%20um%20atendimento";

if (toggle && topbar) {
  toggle.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

document.querySelectorAll("a").forEach((link) => {
  link.setAttribute("href", waUrl);
});

document.querySelectorAll("button.btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open(waUrl, "_blank");
  });
});
