document.addEventListener("DOMContentLoaded", () => {
  const servicios = document.querySelectorAll(".servicio");
  const proyectos = document.querySelectorAll(".proyecto");
  const planes = document.querySelectorAll(".plan");
  const pasos = document.querySelectorAll(".proceso__paso"); // 👈 agregamos los pasos

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // 👈 misma clase para todos
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observamos todo junto
  [...servicios, ...proyectos, ...planes, ...pasos].forEach(item => observer.observe(item));
});
