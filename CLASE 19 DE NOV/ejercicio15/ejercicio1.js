// Creamos un arreglo para almacenar los productos
let inventario = [];

// Función para agregar un producto
function agregarProducto() {
  // Pedimos los datos del producto al usuario
  let nombre = prompt("Ingrese el nombre del producto:");
  let categoria = prompt("Ingrese la categoría del producto:");
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
  let codigo = prompt("Ingrese el código del producto:");

  // Creamos un objeto para representar el producto
  let nuevoProducto = {
    nombre: nombre,
    categoria: categoria,
    precio: precio,
    cantidad: cantidad,
    codigo: codigo
  };

  // Verificamos si el código ya existe
  let existeCodigo = false;
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].codigo === codigo) {
      existeCodigo = true;
      break;
    }
  }

  if (existeCodigo) {
    alert("El código de producto ya existe.");
  } else {
    // Si el código no existe, agregamos el producto al inventario
    inventario.push(nuevoProducto);
    alert("Producto agregado correctamente.");
  }
}

// Función para mostrar el inventario
function mostrarInventario() {
  console.table(inventario);
}

// Llamamos a la función para agregar un producto
agregarProducto();

// Llamamos a la función para mostrar el inventario
mostrarInventario();