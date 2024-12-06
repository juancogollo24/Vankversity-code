// Función para crear un menú interactivo utilizando un objeto para almacenar las opciones
const menu = {
    1: "Introducción al Cambio Climático",
    2: "Huella de Carbono Personal",
    3: "Consejos Prácticos para Reducir tu Impacto"
  };
  
  function crearMenu() {
    console.log("Selecciona un tema:");
    for (const opcion in menu) {
      console.log(`${opcion}. ${menu[opcion]}`);
    }
  
    return parseInt(prompt("Ingrese el número de la opción deseada:"));
  }
  
  // Función para mostrar el contenido de un tema utilizando plantillas literales y funciones flecha
  function mostrarContenido(tema) {
    const contenido = {
      1: `**Introducción al Cambio Climático**
  
      El cambio climático es un cambio a largo plazo de las temperaturas y patrones climáticos de la Tierra. Las actividades humanas, como la quema de combustibles fósiles, son las principales causas.
  
      * **Causas:**
          * Emisiones de gases de efecto invernadero (CO₂, metano, etc.)
          * Deforestación
          * Agricultura intensiva
  
      * **Consecuencias:**
          * Calentamiento global
          * Aumento del nivel del mar
          * Eventos climáticos extremos (sequías, inundaciones)
          * Pérdida de biodiversidad`
    }[tema];
  
    alert(contenido);
  }
  
  // Función principal para iniciar la aplicación
  function iniciarAplicacion() {
    const opcionSeleccionada = crearMenu();
    mostrarContenido(opcionSeleccionada);
  }
  
  iniciarAplicacion();