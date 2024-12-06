// Arreglo de productos con nombre, stock y umbral
const productos = [
  { nombre: 'Manzanas', stock: 10, umbral: 5 },
  { nombre: 'Bananas', stock: 20, umbral: 15 },
  { nombre: 'Naranjas', stock: 3, umbral: 5 }
];
// Función para verificar el stock y emitir alertas
function verificarStock() {
  productos.forEach(producto => {
      if (producto.stock < producto.umbral) {
          console.log(`¡Alerta! El stock de ${producto.nombre} está bajo: ${producto.stock}`);
      }
  });
}
// Función para actualizar el stock de un producto
function actualizarStock(nombreProducto, cantidad) {
  const producto = productos.find(p => p.nombre === nombreProducto);
  if (producto) {
      producto.stock += cantidad;
      console.log(`El stock de ${nombreProducto} se ha actualizado a: ${producto.stock}`);
  } else {
      console.log(`Producto no encontrado: ${nombreProducto}`);
  }
}
// Ejemplo de uso:
verificarStock(); // Verifica el stock inicial
// Actualizar el stock de manzanas
actualizarStock('Manzanas', -3);
// Verificar el stock nuevamente
verificarStock();