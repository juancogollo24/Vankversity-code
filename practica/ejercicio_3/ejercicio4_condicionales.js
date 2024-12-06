/*
Cree un programa que lea los tres ángulos 
internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no. 
Realice una versión con condicionales y otra con estructura switch-case.
*/

function esTriangulo(angulo1, angulo2, angulo3) {
  // Suma de los ángulos internos de un triángulo debe ser 180 grados
  const sumaAngulos = angulo1 + angulo2 + angulo3;

  if (sumaAngulos === 180) {
    console.log("Los ángulos forman un triángulo.");
  } else {
    console.log("Los ángulos no forman un triángulo.");
  }
}

// Ejemplo de uso:
esTriangulo(60, 60, 60); // Triángulo equilátero
esTriangulo(30, 90, 60); // Triángulo rectángulo
esTriangulo(45, 45, 100); // No es un triángulo