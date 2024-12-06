/*
Es una estructura de datos ordenada, indexada
que generalmente contiene elementos de un mismo
tipo(string, boolena, entero...). Los elementos
seacceden mediante un índice, siendo el índice del
primer elemento el 0, el del segundo elemento el 1 etc
Es una estructura iterable(se puede recorrer de manera
natural con un ciclo)
*/
//arreglo de numeros
let arreglo = [20, 4, 7, 8];
console.log(arreglo);
//lectura de elementos
let elemento0 = arreglo[0];
let elemento3 = arreglo[3]
console.log("elemento 0", elemento0);
console.log("elemento 3", elemento3);
console.log("elemento 10", arreglo[10]);
console.log("elemento -1", arreglo[-1]);
console.log("elemento 4", arreglo[4]);
//longitud de un arreglo (cantidad de elementos de un arreglo)usamos el .lenght
let longitudarreglo = arreglo.length;
console.log("longitud arreglo: ", longitudarreglo);
let arreglovacio = [];
console.log("longitud arreglo vacio: ", arreglovacio.length);
//escritura de elementos
//cambiamos el valor del elemento de indice1 por 33
arreglo[1] = 33;
console.log("nuevo valor ", arreglo[1]);
//cambiamos el valor del elemento de indice 3
arreglo[3] = 80;
console.log("todo el arreglo", arreglo);
//agregacion de elementos(metodo push)
arreglo.push(16);
console.log("nueva longitud del arreglo", arreglo.length);
console.log(arreglo);
//agregamos el -90
arreglo.push(-90)
console.log(arreglo);
//eliminacion de elementos usando splice
//eliminamos el elemento de indice 2
arreglo.splice(2, 1);
console.log(arreglo);
//eliminamos dos elementos a partir del indice 1
arreglo.splice(1, 2);
console.log(arreglo);
//arreglos con recorridos
let arreglo2 = ["manzana", "pera", "limon", "banano"];
for (let index = 0; index < arreglo2.length; index++) {
    console.log("index", index);
    console.log("Elemento: ", arreglo2[index]);
    
}
//otra formar de recorrer con ciclo foreach
arreglo2.forEach((elemento) => {
    console.log("elemento: ", elemento);
    
})
//copia de un arreglo 

let arregloA = ["a", "b", "c"]
//copai no independiente de arregloA
let copiaA = arregloA;
copiaA.splice(2, 1);
console.log("estado arregloA", arregloA);
//copia independiente
let copiaIndependiente = arregloA.slice();




