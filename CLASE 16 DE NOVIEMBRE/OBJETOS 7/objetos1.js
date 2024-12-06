// Arreglos con los países de cada continente
const asia = ['China', 'Japón', 'India', 'Corea del Sur', 'Indonesia'];
const america = ['Estados Unidos', 'Brasil', 'Canadá', 'Argentina', 'México'];
const africa = ['Nigeria', 'Egipto', 'Sudáfrica', 'Etiopía', 'Congo'];
const europa = ['Alemania', 'Francia', 'España', 'Italia', 'Reino Unido'];
const oceania = ['Australia', 'Nueva Zelanda', 'Papúa Nueva Guinea', 'Islas Salomón', 'Vanuatu'];
// Solicitar al usuario el nombre del continente
const continente = prompt("Ingrese el nombre de un continente (Asia, América, África, Europa, Oceanía):");
// Convertir la entrada del usuario a minúsculas para evitar problemas de mayúsculas
const continenteMinuscula = continente.toLowerCase();
// Función para mostrar los países de un continente
function mostrarPaises(continente) {
  switch (continente) {
    case 'asia':
      console.log('Países de Asia:');
      console.log(asia.join(', '));
      break;
    case 'america':
      console.log('Países de América:');
      console.log(america.join(', '));
      break;
    case 'africa':
      console.log('Países de África:');
      console.log(africa.join(', '));
      break;
    case 'europa':
      console.log('Países de Europa:');
      console.log(europa.join(', '));
      break;
    case 'oceania':
      console.log('Países de Oceanía:');
      console.log(oceania.join(', '));
      break;
    default:
      console.log('Continente no válido.');
  }
}
// Llamar a la función con el continente seleccionado por el usuario
mostrarPaises(continenteMinuscula);