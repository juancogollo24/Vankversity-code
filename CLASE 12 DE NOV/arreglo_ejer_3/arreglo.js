/*
Dado un array de objetos que representan personas {nombre: ---, edad: ---},
 modifica el array para que contenga solo los nombres de las personas.
*/
function obtenerNombres(personas) {
  return personas.map(persona => persona.nombre);
}
const personas = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'María', edad: 25 },
  { nombre: 'Pedro', edad: 35 }
];

const nombres = obtenerNombres(personas);
console.log(nombres); // Imprimirá: ['Juan', 'María', 'Pedro']