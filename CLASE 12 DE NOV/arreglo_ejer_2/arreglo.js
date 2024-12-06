/*
Dado un array de números,genera  un nuevo array que solo contenga los números pares.
*/
function obtenerParesConFilter(numeros) {
  return numeros.filter(numero => numero % 2 === 0);
}
// ejemplo de uso
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pares = obtenerParesConFilter(numeros);
console.log(pares); 