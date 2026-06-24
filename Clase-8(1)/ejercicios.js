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

//---------------------Ejercicio-1---------------------------------

const soloNombres = productos.map(function (producto) {
  return producto.nombre;
});

console.log(soloNombres);

//---------------------Ejercicio-2---------------------------------

const preciosConIVA = productos.map(function (producto) {
  return {
    nombre: producto.nombre,
    precioFinal: Math.round(producto.precio * 1.21),
  };
});

console.log(preciosConIVA);

//---------------------Ejercicio-3---------------------------------

const productosMuebles = productos
  .filter(function (producto) {
    return producto.categoria === "Muebles";
  })
  .map(function (producto) {
    return producto.nombre;
  });

console.log(productosMuebles);

//---------------------Ejercicio-4---------------------------------

const productoPorId = productos.find(function (producto) {
  return producto.id === 6;
});

console.log(productoPorId.nombre + " - $" + productoPorId.precio);

//---------------------Ejercicio-5---------------------------------

const productoContiene = productos.find(function (producto) {
  return producto.nombre.includes("Mouse");
});

if (productoContiene) {
  console.log("Encontrado: ", productoContiene.nombre);
} else {
  console.log("No encontrado");
}

//---------------------Ejercicio-6---------------------------------

const producto1 = productos.some(function (producto) {
  return producto.precio > 100000;
});

if (producto1) {
  console.log("Si hay al menos un producto con un precio mayor a $100000");
} else {
  console.log("No hay un producto con un precio mayor a $100000");
}
console.log(producto1);

const producto2 = productos.every(function (producto) {
  return producto.id != "";
});

if (producto2) {
  console.log("Todos los productos tienen id definido");
} else {
  console.log("No todos los productos tienen id definido");
}
console.log(producto2);

const producto3 = productos.some(function (producto) {
  return producto.activo == false;
});

if (producto3) {
  console.log("Si hay al menos un producto inactivo");
} else {
  console.log("No hay ningun producto inactivo");
}

console.log(producto3);

const producto4 = productos
  .filter(function (producto) {
    return producto.categoria == "Electrónica";
  })
  .every(function (producto) {
    return producto.stock > 0;
  });

if (producto4 == false) {
  console.log("Hay algun producto de Electrónica que no tiene stock mayor a 0");
} else {
  console.log("Todos los productos de Electrónica tienen stock mayor a 0");
}

console.log(producto4);

//---------------------Ejercicio-7---------------------------------

const valorInventario = productos
  .filter(function (producto) {
    return producto.stock > 0;
  })
  .reduce(function (acumulador, producto) {
    return producto.precio * producto.stock;
  });

console.log(valorInventario);

//---------------------Ejercicio-8---------------------------------

const productosSeleccionados = productos
  .filter(function (producto) {
    return producto.activo == true;
  })
  .filter(function (producto) {
    return producto.stock > 0;
  })
  .filter(function (producto) {
    return producto.precio < 20000;
  })
  .map(function (producto) {
    return producto.nombre;
  });

console.log(productosSeleccionados);

//---------------------Ejercicio-9---------------------------------
/*
const contarProductoActivos = productos.reduce(function (producto, acumulador) {
  const productosActivos = producto.categoria;

  if (acumulador[productosActivos] === undefined) {
    acumulador[productosActivos] = 0;
  }
  acumulador[productosActivos] = acumulador[productosActivos] + 1;

  return acumulador;
});

console.log(contarProductoActivos);
*/
const productosActivos = productos.filter(function (producto) {
  return producto.activo === true;
});

const productosPorCategoria = productosActivos.reduce(function (acc, producto) {
  const cat = producto.categoria;

  if (acc[cat] === true) {
    acc[cat] += 1;
  } else {
    acc[cat] = acc[cat];
  }

  return acc;
}, {});

console.log(productosPorCategoria);
//---------------------Ejercicio-10---------------------------------
