import { Carta } from "./Carta.js";

function GuardadosHTML(criterio = null) {
  const datos = localStorage.getItem("cartas");
  const contenedor = document.getElementById("contenedorCartas");

  contenedor.innerHTML = "";
  if (!datos) return;

  let cartas = JSON.parse(datos);

  if (criterio === "nombre") {
    cartas.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  cartas.forEach((carta) => {
    const cartaInstanciada = new Carta(
      carta.code,
      carta.value,
      carta.suit,
      carta.image,
    );
    const htmlCarta = cartaInstanciada.createHtmlElement();
    contenedor.appendChild(htmlCarta);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  GuardadosHTML();

  document.getElementById("btnOrdenNombre").addEventListener("click", () => {
    GuardadosHTML("nombre");
  });
});
