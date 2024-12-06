function sumapares(numero) {
    let suma = 0;
    for (let i = 2; i <= numero; i += 2) {
        suma += i;
}
  return suma;
}

//solicitamos el numero 
const numeroingresado = parseInt(prompt("Ingrese un numero entero positivo:"));

//validamos si el numero ingresado es positivo
if (numeroingresado > 0) {
    const resultado =
    sumapares(numeroingresado);
console.log(`La suma de los numeros pares hasta ${numeroingresado} es: ${resultado}`);

    
}else{
    console.log("por favor, ingrese un numero entero positivo.");
}