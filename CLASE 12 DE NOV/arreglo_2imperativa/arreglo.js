function obtenerImparesImperativo(numeros) {
  const impares = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      impares.push(numeros[i]);
    }
  }

  return impares;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const impares = obtenerImparesImperativo(numeros);
console.log(impares); // Imprimirá: [1, 3, 5, 7, 9]