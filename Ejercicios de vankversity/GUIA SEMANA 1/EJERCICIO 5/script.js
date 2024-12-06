function calcularArea(radio) {
    const PI = 3.14159;
    return PI * radio * radio;
  }
  
  function calcularPerimetro(radio) {
    const PI = 3.14159;
    return 2 * PI * radio;
  }
  
  let radio = parseFloat(prompt("Ingrese el radio del círculo:"));

  let area = calcularArea(radio);
  let perimetro = calcularPerimetro(radio);
 
  console.log("El área del círculo es: " + area.toFixed(2) + " unidades cuadradas.");
  console.log("El perímetro del círculo es: " + perimetro.toFixed(2) + " unidades.");