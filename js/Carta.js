/*3.(3pts) Crear en el archivo carta.js la clase Carta con: 
a. Atributos: code (string), value (string), suit (string), imagen(string).
b. Constructor. Debe tomar y asignar todos los datos. 
c. Métodos: 
i. toJsonString(). De instancia. Devuelve un string json que representa al objeto. 
ii. createFromJsonString(json) De clase. Devuelve una instancia de la clase Carta creada con los datos provenientes del parámetro json de tipo string. 
iii. createHtmlElement(). De instancia. Devuelve un elemento HTML que permita mostrar del  documento los datos: code, imagen(recuperar del url), suit, value.*/

export class Carta {
  constructor(code, value, suit, imagen) {
    if (code == null || typeof code != "string") {
      throw new Error(
        "no puede tener una cadena de texto vacia o no ser texto",
      );
    }

    if (value == null || typeof value != "string") {
      throw new Error("el valor no puede ser nulo y tiene q ser texto");
    }
    if (suit == null || typeof suit != "string") {
      throw new Error(
        "el suit no puede ser vacio y tiene q ser una cadena de texto",
      );
    }
    if (imagen == null || typeof imagen != "string") {
      throw new Error(
        "la imagen no puede estar vacia y tine q ser una cadena de texto",
      );
    }
    this.code = code;
    this.value = value;
    this.suit = suit;
    this.imagen = imagen;
  }
  //   metodos
  toJsonString() {
    return JSON.stringify(this);
  }

  createFromJsonString(json) {
    const datos = JSON.parse(json);
    return new Carta(datos.code, datos.value, datos.suit, datos.imagen);
  }

  createHtmlElement() {
    const div = document.createElement("div");
    div.style.maxWidth = "200px";

    const codigo = document.createElement("h3");
    codigo.textContent = this.code;

    const imagen = document.createElement("img");
    imagen.src = this.imagen;
    imagen.style.maxWidth = "150px";

    const palo = document.createElement("p");
    palo.textContent = `el palo: ${this.suit}`;

    const valor = document.createElement("p");
    valor.textContent = `el valor es: ${this.value}`;
  }
}
