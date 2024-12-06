/*
Cree un programa que reciba dos números y muestre el mayor. 
En caso de que los números sean iguales también se debe mostrar al usuario.
*/
function encontrarMayor(num1, num2) {
    if (num1 > num2) {
      return "el numero mayor es: " + num1;
    } else if (num2 > num1) {
      return "el numero mayor es: " + num2;
    } else {
      return "Ambos números son iguales.";
    }
  }
  
  // Obtener los números del usuario
  const numero1 = parseFloat(prompt("Ingrese el primer número:"));
  const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  
  // Llamar a la función y mostrar el resultado
  const resultado = encontrarMayor(numero1, numero2);
  console.log(resultado);