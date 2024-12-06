/*
Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

function esParOImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es par.");
  } else {
    console.log(numero + " es impar.");
  }
}

esParOImpar(4);  // Salida: 4 es par.
esParOImpar(7);  // Salida: 7 es impar.