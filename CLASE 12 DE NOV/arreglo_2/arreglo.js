function obtenerImparesDeclarativo(numeros) {
  return numeros.filter(numero => numero % 2 !== 0);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const impares = obtenerImparesDeclarativo(numeros);
console.log(impares); // Imprimirá: [1, 3, 5, 7, 9]