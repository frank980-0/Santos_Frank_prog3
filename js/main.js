/*4.(3pts) Crear el archivo main.js que se encargue de: 
a. Al momento de cargar la página, utilizar el método fetch para traer 6 cartas  de la api: https://deckofcardsapi.com/api/deck/new/draw/?count=6
b. Utilizar los datos que traen los fetch para instanciar objetos de la clase Carta. 
c. Utilizar los objetos de la clase Carta para llamar al método createHtmlElement() e insertar en el DOM dichos elementos como hijos del elemento con id=Cartas. 
 */

import { Carta } from "./Carta.js";

let paginaActual = 1;
const cartasPagina = 6;

async function cargarCartas(pagina) {
  try {
    const respuesta = await fetch(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=${cartasPagina}`,
    );
    if (!respuesta.ok) {
      alert("las cartas no se cargaron, 404");
    }
    const dato = await respuesta.json();
    const contenedor = document.getElementById("cartas");
    contenedor.innerHTML = "";

    dato.cards.forEach((datoCarta) => {
      const carta = new Carta(
        datoCarta.code,
        datoCarta.value,
        datoCarta.suit,
        datoCarta.image,
      );
      contenedor.appendChild(carta.createHtmlElement());
    });
  } catch (error) {
    alert("ocurrio un error:" + error.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargarCartas(paginaActual);
});
