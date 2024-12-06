let cantidad = parseFloat(prompt("Ingrese la cantidad:"));

let porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular (sin el símbolo %):"));

let porcentajeDecimal = porcentaje / 100;

let resultado = cantidad * porcentajeDecimal;

console.log(porcentaje + "% de " + cantidad + " es: " + resultado);