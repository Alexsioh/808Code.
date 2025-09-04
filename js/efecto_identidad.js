document.addEventListener("DOMContentLoaded", () => {
  const letras = document.querySelectorAll("#identidad span");

  // Array de fuentes (puedes usar Google Fonts)
  const fuentes = [
  "'Fira Code', monospace",
  "'Roboto', sans-serif",
  "'Playfair Display', serif",
  "'Poppins', sans-serif",
  "'Pacifico', cursive",
  "'Orbitron', sans-serif",
  "'Raleway', sans-serif"
];

  let indiceFuente = 0;

  function cambiarFuente() {
    letras.forEach((letra, i) => {
      setTimeout(() => {
        letra.style.fontFamily = fuentes[indiceFuente];
      }, i * 150); // delay progresivo por letra
    });

    // Avanza a la siguiente fuente (cíclico)
    indiceFuente = (indiceFuente + 1) % fuentes.length;
  }

  // Cambia cada 4 segundos
  setInterval(cambiarFuente, 2000);

  // Primer arranque inmediato
  cambiarFuente();
});
