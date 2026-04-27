async function cargarEscena() {

  const res = await fetch("./scene.json");
  const data = await res.json();

  const root = document.querySelector("#target");

  data.forEach((el, i) => {

    let obj;

    if (el.asset.includes(".mp4")) {
      obj = document.createElement("a-video");
      obj.setAttribute("src", "#video0");
      obj.setAttribute("width", "1");
    } else {
      obj = document.createElement("a-image");
      obj.setAttribute("src", "./assets/" + el.asset);
    }

    obj.setAttribute("position", `${el.position.x} ${el.position.y} ${el.position.z}`);
    obj.setAttribute("scale", `${el.scale.x} ${el.scale.y} ${el.scale.z}`);

    root.appendChild(obj);

  });

}

document.addEventListener("DOMContentLoaded", cargarEscena);