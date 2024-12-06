let precioElectrodomestico = parseFloat(prompt("Ingrese el precio del electrodoméstico:"));
let plazoEnMeses = parseInt(prompt("Ingrese el plazo en meses para pagar:"));

let precioTotal = precioElectrodomestico;

for (let mes = 1; mes <= plazoEnMeses; mes++) {
    precioTotal *= 1.05;
}

let cuotaMensual = precioTotal / plazoEnMeses;

console.log("El valor de cada cuota mensual es: $" + cuotaMensual.toFixed(2));