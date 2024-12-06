/*
Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

function esTrianguloSwitch(angulo1, angulo2, angulo3) {
  const sumaAngulos = angulo1 + angulo2 + angulo3;

  switch (sumaAngulos) {
    case 180:
      console.log("Los ángulos forman un triángulo.");
      break;
    default:
      console.log("Los ángulos no forman un triángulo.");
  }
}

// Ejemplo de uso:
esTrianguloSwitch(60, 60, 60);
esTrianguloSwitch(30, 90, 60);
esTrianguloSwitch(45, 45, 100);