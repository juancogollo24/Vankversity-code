//UN CICLO NOS SIRVE PARA REPETIR
//INSTRUCCIONES
//usamos el do-while cuando requerimos ejecutar
//el bloque de instrucciones por lo menos 
//una vez
/*
Programa que pide letras indefinifamente
hasta que se ingrese la z
*/
//version con do-while
console.log("------solucion con do-while------");

let letra;
do {
    letra = prompt("Ingrese letra");
    console.log(letra);
} while (letra != "z");

console.log("------solucion con while------");

//version con while
let letra2 = prompt("Ingrese letra")
console.log(letra2);
while (letra2 != "z") {
    letra2 = prompt("Ingrese Letra");
    console.log(letra2);
}
//Crear un programa que pida datos de
//registro a un usuario, edad, estatura
//peso. El programa debe pedir indefinidamente
//los datos del registro en caso de que
//alguno no cumpla. Para poder registrarse
//al edad debe ser una persona mayor de edad
//la estatura superior a 1.75m, y el peso entre 75 y 100kg

let edad;
do {
    edad = parseInt(prompt ("Edad"));
    console.log(edad);
} while (!edad >= 18);
console.log("registrado exitosamente");

let peso; 
do {
    peso = parseInt(prompt ("Peso Corporal"))
    console.log(peso);
    
} while (!peso >= 75 && 100 );
console.log("Registrado Exitosamente");


let estatura;
do {
    estatura = parseInt(prompt("Estatura"))
    console.log(estatura);
    
} while (!estatura >= 1.75 );
console.log("registrado exitosamente");




