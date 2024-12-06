/*
Las funciones nos permiten reciclar
codigo. Hacer que el codigo sea mucho mas legible.
Hacen que el codigo sea mas facil hacer los cambios
en un programa.
*/

//crear la funcion f(x) = 2x + 1 en Javascript

function f(x) {
    //cuerpo de la funcion
    let resultado = 2*x + 1;
    //el return marca el fin de la funcion
    //y se encarga de devolver un valor
    //funcional
    return resultado;
}

let retorno1 = f(2);
console.log("Resultado de la funcion :", retorno1);

let retorno2 = f(5);
console.log("Resultado de la funcion :", retorno2);

let retorno3 = f(4);
console.log("Resultado de la funcion :", retorno3);

