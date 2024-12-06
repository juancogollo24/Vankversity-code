/*
Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

function esParOImparSwitch(numero) {
  switch (numero % 2) {
    case 0:
      console.log(numero + " es par.");
      break;
    case 1:
      console.log(numero + " es impar.");
      break;
    default:
      console.log("Entrada inválida.");
  }
}

esParOImparSwitch(4);
esParOImparSwitch(7);