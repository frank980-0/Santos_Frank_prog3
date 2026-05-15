/*3.(3pts) Crear en el archivo carta.js la clase Carta con: 
a. Atributos: code (string), value (string), suit (string), imagen(string).
b. Constructor. Debe tomar y asignar todos los datos. 
c. Métodos: 
i. toJsonString(). De instancia. Devuelve un string json que representa al objeto. 
ii. createFromJsonString(json) De clase. Devuelve una instancia de la clase Carta creada con los datos provenientes del parámetro json de tipo string. 
iii. createHtmlElement(). De instancia. Devuelve un elemento HTML que permita mostrar del  documento los datos: code, imagen(recuperar del url), suit, value.*/

export class Carta {
  constructor(code, value, suit, image) {
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
    if (image == null || typeof image != "string") {
      throw new Error(
        "la imagen no puede estar vacia y tine q ser una cadena de texto",
      );
    }
    this.code = code;
    this.value = value;
    this.suit = suit;
    this.image = image;
  }
  //   metodos
  toJsonString() {
    return JSON.stringify(this);
  }

  static createFromJsonString(json) {
    const datos = JSON.parse(json);
    return new Carta(datos.code, datos.value, datos.suit, datos.image);
  }

  static guardarCarta(carta) {
    const cartasGuardadas = JSON.parse(localStorage.getItem("cartas")) || [];
    cartasGuardadas.push(carta);
    localStorage.setItem("cartas", JSON.stringify(cartasGuardadas));
    console.log("las cartas fueron cargadas");
    console.log(cartasGuardadas);
  }

  createHtmlElement() {
    const div = document.createElement("div");
    div.style.maxWidth = "200px";

    const codigo = document.createElement("h3");
    codigo.textContent = this.code;

    const imagen = document.createElement("img");
    imagen.src = this.image;
    imagen.style.maxWidth = "150px";

    const palo = document.createElement("p");
    palo.textContent = `el palo: ${this.suit}`;

    const valor = document.createElement("p");
    valor.textContent = `el valor es: ${this.value}`;

    /*6.(2pts) Modificar el retorno del método createHtmlElement() para que: 
a. Al clickear la imagen, se abre en otra pestaña el link contenido en el atributo url de la clase Carta. 
b. Agregar un botón debajo de la información de la serie que posea el texto “guardar” y llame al método guardarCarta(). 
 */
    const urlImagen = document.createElement("a");
    urlImagen.href = this.image;
    urlImagen.target = "_blank";

    urlImagen.appendChild(imagen);
    div.appendChild(codigo);
    div.appendChild(palo);
    div.appendChild(valor);
    div.appendChild(urlImagen);

    const botonGuardar = document.createElement("button");
    botonGuardar.textContent = "Guardar";
    botonGuardar.onclick = () => Carta.guardarCarta(this);
    div.appendChild(botonGuardar);
    return div;
  }
}
