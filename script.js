const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__list a");

function closeMenu() {
  navList.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menu");
}

navToggle.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("is-open");

  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
