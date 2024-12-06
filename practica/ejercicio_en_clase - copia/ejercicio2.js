function esprimo(numero) {
    if (numero <= 1) {
        return false;
}
for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
    return false;
}
}
return true;
}
const numeroingresado = parseInt (promtp("ingrese un numero entero:"));

if (esprimo(numeroingresado)) {
    console.log(numeroingresado + "es un numero primo.");
}else{
    console.log(numeroingresado + " no es un numero primo.");
}