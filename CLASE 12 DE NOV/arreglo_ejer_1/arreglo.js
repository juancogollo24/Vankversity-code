/*
Dado un array de temperaturas en grados Celsius, 
convertirlas a grados Fahrenheit.
*/
function celsiusAFahrenheit(temperaturasCelsius) {
  const temperaturasFahrenheit = [];
  for (let i = 0; i < temperaturasCelsius.length; i++) {
    const fahrenheit = (temperaturasCelsius[i] * 9/5) + 32;
    temperaturasFahrenheit.push(fahrenheit);
  }

  return temperaturasFahrenheit;
}
const temperaturasCelsius = [0, 10, 20, 30];
const temperaturasFahrenheit = celsiusAFahrenheit(temperaturasCelsius);
console.log(temperaturasFahrenheit);