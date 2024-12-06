function buscarNombre(arreglo, nombre) {
  // indexOf devuelve el índice del primer elemento encontrado, o -1 si no se encuentra
  return arreglo.indexOf(nombre) !== -1;
}

const nombres = ["Ana", "Juan", "Pedro", "María"];
const nombreBuscar = "Juan";

const resultado = buscarNombre(nombres, nombreBuscar);

if (resultado) {
  console.log("El nombre se encontró en el arreglo");
} else {
  console.log("El nombre no se encontró en el arreglo");
}