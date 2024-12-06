function convertirNombresAMayusculasSinMap(nombres) {
    const nombresMayusculas = [];
  
    for (let i = 0; i < nombres.length; i++) {
      nombresMayusculas.push(nombres[i].toUpperCase());
    }
  
    return nombresMayusculas;
  }

  let nombres = ["Maria", "Raul", "Pedro"];
const nombresEnMayusculas = convertirNombresAMayusculasSinMap(nombres);
console.log(nombresEnMayusculas); // Imprimirá: ["MARIA", "RAUL", "PEDRO"]