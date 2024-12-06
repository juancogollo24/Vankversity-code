/*
Una función que recibe un arreglo de números y retorna la suma de los cuadrados de los elementos impares del arreglo
*/
function sumaCuadradosImpares(numeros) {
  const impares = numeros.filter(num => num % 2 !== 0);
  const sumaCuadrados = impares.map(num => num * num).reduce((acc, curr) => acc + curr, 0);

  return sumaCuadrados;
}
//ejemplo de uso
const numeros = [1, 2, 3, 4, 5, 6, 7];
const resultado = sumaCuadradosImpares(numeros);
console.log(resultado); // Imprimirá: 35 (1*1 + 3*3 + 5*5 + 7*7)