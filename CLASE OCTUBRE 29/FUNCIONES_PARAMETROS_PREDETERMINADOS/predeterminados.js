/* 
funcion para calcular el precio final de un
producto
*/

function PrecioFinal(precio, iva=0.19) {
    let precioConIva = precio + precio*iva;
    return precioConIva
}

let resultado = PrecioFinal (20000);
console.log("Precio final : ",resultado);

let resultado2 = PrecioFinal (20000);
console.log("Precio final : ",resultado);

