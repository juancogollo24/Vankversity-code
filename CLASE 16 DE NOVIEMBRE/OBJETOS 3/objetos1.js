let numeros = {1: "uno", 2: "dos", 3: "tres"};

// Obtener las claves del objeto
const claves = Object.keys(numeros);

// Recorrer las claves y mostrar la propiedad y su valor
claves.forEach(clave => {
  console.log(`Propiedad: ${clave}, Valor: ${numeros[clave]}`);
});