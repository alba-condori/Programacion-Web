const productos = [
  {
    id: 1,
    nombre: "Auriculares Bluetooth",
    categoria: "Electrónica",
    precio: 15000,
    stock: 8,
    activo: true,
  },
  {
    id: 2,
    nombre: "Teclado Mecánico",
    categoria: "Electrónica",
    precio: 22000,
    stock: 0,
    activo: true,
  },
  {
    id: 3,
    nombre: "Silla Ergonómica",
    categoria: "Muebles",
    precio: 85000,
    stock: 3,
    activo: true,
  },
  {
    id: 4,
    nombre: "Lámpara de Escritorio",
    categoria: "Muebles",
    precio: 9500,
    stock: 12,
    activo: false,
  },
  {
    id: 5,
    nombre: "Mouse Inalámbrico",
    categoria: "Electrónica",
    precio: 7800,
    stock: 20,
    activo: true,
  },
  {
    id: 6,
    nombre: 'Monitor 27"',
    categoria: "Electrónica",
    precio: 120000,
    stock: 2,
    activo: true,
  },
  {
    id: 7,
    nombre: "Alfombra de Escritorio",
    categoria: "Muebles",
    precio: 4200,
    stock: 0,
    activo: false,
  },
  {
    id: 8,
    nombre: "Webcam HD",
    categoria: "Electrónica",
    precio: 18000,
    stock: 5,
    activo: true,
  },
];

//---------------------------------------------------
// Extraer solo los nombres
const nombres = productos.map(function (producto) {
  return producto.nombre;
});

console.log(nombres);
// ["Auriculares Bluetooth", "Teclado Mecánico", "Silla Ergonómica", ...]


//---------------------------------------------------
// Crear un array con nombre y precio formateado
const resumenes = productos.map((producto) => {
  return {
    nombre: producto.nombre,
    precioFormateado: "$" + producto.precio.toLocaleString("es-AR"),
  };
});

console.log(resumenes[0]);
// { nombre: "Auriculares Bluetooth", precioFormateado: "$15.000" }

//---------------------------------------------------
//retorna el producto que tiene id === 3
const producto = productos.find(function(p) {
  return p.id === 3;
});

console.log(producto);
// { id: 3, nombre: "Silla Ergonómica", categoria: "Muebles", precio: 85000, stock: 3, activo: true }


//---------------------------------------------------
const resultado = productos.find(p => p.id === 999);
console.log(resultado); // undefined

// Antes de usar el resultado, verificá:
if (resultado) {
  console.log(resultado.nombre);
}

//---------------------------------------------------

// filter → siempre un array (puede estar vacío)
const teclados = productos.filter(p => p.nombre.includes("Teclado"));
// [{ id: 2, nombre: "Teclado Mecánico", ... }]

// find → el elemento directamente (o undefined)
const teclado = productos.find(p => p.nombre.includes("Teclado"));
// { id: 2, nombre: "Teclado Mecánico", ... }


//---------------------------------------------------

// ¿Hay algún producto sin stock?
const haySinStock = productos.some(function(p) {
  return p.stock === 0;
});

console.log(haySinStock); // true


//---------------------------------------------------

// ¿Todos los productos están activos?
const todosActivos = productos.every(function(p) {
  return p.activo === true;
});

console.log(todosActivos); // false (hay inactivos)



//---------------------------------------------------
// ¿Ningún producto tiene precio negativo?
const preciosValidos = !productos.some(p => p.precio < 0);
//---------------------------------------------------

const suma = productos.reduce(function(acumulador, producto) {
  return acumulador + producto.precio;
}, 0);

console.log(suma); // 282500


//---------------------------------------------------

const porCategoria = productos.reduce(function(acc, producto) {
  const cat = producto.categoria;

  if (acc[cat] === undefined) {
    acc[cat] = 0;
  }

  acc[cat] = acc[cat] + 1;
  return acc;
}, {});

console.log(porCategoria);
// { Electrónica: 5, Muebles: 3 }


//---------------------------------------------------

// Solo los productos de Electrónica, activos, con sus precios con IVA
const conIVA = productos
  .filter(p => p.categoria === "Electrónica")
  .filter(p => p.activo)
  .map(p => ({
    nombre: p.nombre,
    precioConIVA: p.precio * 1.21
  }));

//---------------------------------------------------

