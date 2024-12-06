let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto:"));

let descuento = precioOriginal * 0.10;

let precioFinal = precioOriginal - descuento;

console.log("El precio final del producto con descuento es: $" + precioFinal.toFixed(2));