const series = [
  {
    titulo: "When Life Give You Tangerines",
    imagen:
      "Clase-7(Cine)/Imagenes/kdrama poster of _when life gives you tangerines_.jpeg",
    genero: "Melodrama",
    rating: 9.0,
    sinopsis:
      "La historia sigue la vida de Ae-sun, una joven rebelde y apasionada que sueña con ser poeta, y Gwan-sik, un joven diligente y silencioso que la ama en secreto. Ambientada en los paisajes de la isla de Jeju desde la década de 1950, la serie narra sus desafíos, su romance y su crecimiento personal a lo largo de las estaciones de la vida.",
  },
  {
    titulo: "Ao Haru Ride",
    imagen: "Clase-7(Cine)/Imagenes/Ao Haru Ride.jpeg",
    genero: "Shōjo",
    rating: 7.5,
    sinopsis:
      "Futaba se reencuentra en la preparatoria con Kou, su primer amor de la secundaria. Sin embargo, él regresa con una actitud fría y un pasado doloroso, obligándolos a enfrentar sus viejos sentimientos mientras superan los traumas de la adolescencia.",
  },
  {
    titulo: "When I Fly Towards You",
    imagen: "Clase-7(Cine)/Imagenes/WhenIFlyTowardsYou.jpeg",
    genero: "Comedia Romantica",
    rating: 8.5,
    sinopsis:
      "Su Zaizaizai, una alegre estudiante de preparatoria, se enamora a primera vista de Zhang Lurang, un chico frío y brillante pero lleno de inseguridades. A través de su optimismo y calidez, ella logra derribar sus barreras emocionales, transformando sus vidas y las de su grupo de amigos mientras crecen juntos.",
  },
];

function crearCard(serie) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${serie.imagen}" alt="${serie.titulo}">
    <div class="card-info">
      <span class="genero">${serie.genero}</span>
      <h2>${serie.titulo}</h2>
      <p>${serie.sinopsis}</p>
      <span class="rating">★ ${serie.rating}</span>
    </div>
  `;

  return card;
}

function renderGrilla(lista) {
  const grilla = document.querySelector("#grilla");
  const contador = document.querySelector("#contador");

  grilla.innerHTML = "";

  lista.forEach(function (serie) {
    const card = crearCard(serie);
    grilla.appendChild(card);
  });

  contador.textContent = lista.length + " series encontrados";
}

/*function buscar(lista, termino) {
  return lista.filter(function (serie) {
    return serie.titulo.toLowerCase().includes(termino.toLowerCase());
  });
}

function filtrarPorGenero(lista, genero) {
  if (genero === "") return lista;

  return lista.filter(function (serie) {
    return serie.genero === genero;
  });
}

function buscarYFiltrar() {
  const termino = document.querySelector("#busqueda").value;
  const genero = document.querySelector("#genero").value;

  let resultado = buscar(series, termino);
  resultado = filtrarPorGenero(resultado, genero);

  renderGrilla(resultado);
}

document.querySelector("#busqueda").addEventListener("input", buscarYFiltrar);
document.querySelector("#genero").addEventListener("change", buscarYFiltrar);

renderGrilla(series);
*/
