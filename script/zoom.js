const img = document.getElementById("myImage");
const container = document.querySelector(".zoom-container");

container.addEventListener("mousemove", function (e) {
  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const deltaX = (mouseX - centerX) * -0.5; // ajustez ce chiffre pour modifier l'intensité du déplacement
  const deltaY = (mouseY - centerY) * -0.5; // ajustez ce chiffre pour modifier l'intensité du déplacement

  img.style.transform = `scale(2) translate(${deltaX}px, ${deltaY}px)`; // scale(2) signifie un zoom de 200%
});

container.addEventListener("mouseleave", function () {
  img.style.transform = "scale(1) translate(0, 0)";
});
