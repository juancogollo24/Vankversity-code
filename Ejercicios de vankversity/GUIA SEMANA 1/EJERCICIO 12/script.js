function celsiusAFahrenheit(celsius) {

    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }

  let gradosCelsius = parseFloat(prompt("Ingrese los grados Celsius:"));
  
  let resultado = celsiusAFahrenheit(gradosCelsius);
  console.log(gradosCelsius + " grados Celsius equivalen a " + resultado + " grados Fahrenheit.");