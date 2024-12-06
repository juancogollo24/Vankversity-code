/*
Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne
ordenado de menor a mayor según el valor de tales elementos
*/

function ordenarNumerosDeclarativo(numeros) {
  return [...new Set(numeros)].sort((a, b) => a - b);
}
//ejemplo de uso
const numerosDesordenados = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const numerosOrdenados = ordenarNumerosDeclarativo(numerosDesordenados);
console.log(numerosOrdenados); // Imprimirá: [1, 2, 3, 4, 5, 6, 9]