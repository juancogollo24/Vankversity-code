/*
funcion que recive un arreglo de numeros como
argumento y retorna su promedio
*/
function calcularPromedio(numeros) {
    if (numeros.length === 0) {
      return "El arreglo está vacío";
    }
  
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
  
    return suma / numeros.length;
  }

  const numeros = [2, 4, 6, 8, 10];
const promedio = calcularPromedio(numeros);
console.log("El promedio es:", promedio);
