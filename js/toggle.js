const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  // Bloquear scroll cuando el menú está activo
  if (menu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});