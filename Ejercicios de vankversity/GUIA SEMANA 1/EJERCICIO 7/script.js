let precioOriginal = parseFloat(prompt("Ingrese el precio del producto sin IVA:"));

let iva = precioOriginal * 0.19;

let precioFinal = precioOriginal + iva;

console.log("El precio final del producto con IVA es: $" + precioFinal.toFixed(2));