function sumarElementos(numeros) {
  let suma = 0; // Inicializamos la suma en 0

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]; // Sumamos cada elemento al acumulador
  }

  return suma;
}
const numeros = [3, 5, 8, 7, 5];
const resultado = sumarElementos(numeros);
console.log(resultado); // Imprimirá: 28