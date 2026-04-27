const target = document.querySelector("#target");
const video = document.querySelector("#video");

// Cuando detecta el mural
target.addEventListener("targetFound", () => {
  console.log("Mural detectado");

  video.play().catch(() => {
    console.log("Autoplay bloqueado, esperando interacción");
  });
});

// Cuando pierde el mural
target.addEventListener("targetLost", () => {
  console.log("Mural perdido");

  video.pause();
});