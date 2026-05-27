const listas = [1, 2, 3, "Federico", true];
const objetos = { nombre: "Federico" };

console.log("Impriminedo posicion 2", listas[2]);

listas.forEach((elementoLista, index) => {
  console.log("elemento", elementoLista, "posicion", index);
});

console.log(objetos.nombre);

const arregloObjetos = [{ nombre: "Federico" }, { nombre: "Juan" }];

arregloObjetos.forEach((objeto) => {
  console.log(objeto.nombre);
});

const personajes = [
  { nombre: "Yang Gwam Sik", descripcion: "papá luchon" },
  { nombre: "Ae sun", descripcion: "mamá poeta" },
  { nombre: "Zhang Lu Rang", descripcion: "chico frio" },
  { nombre: "Su Zai Zai", descripcion: "chica estudiante" },
];

function crearCard(personaje) {
  return `
    <div class="card">
        <h2>${personaje.nombre}</h2>
        <p>${personaje.descripcion}</p>
    </div>
    `;
}

let html = "";

personajes.forEach((personaje) => {
  html += crearCard(personaje);
});

document.querySelector("#grilla").innerHTML = html;

/*Estas dos funcionan igual como funcion
const sumar = () => {

}

function sumar() {
    
}*/
