let numeros = {dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50};

// Recorremos el objeto usando Object.entries() para obtener pares clave-valor
Object.entries(numeros).forEach(([clave, valor]) => {
    // Si el valor es par, lo mostramos en consola
    if (valor % 2 === 0) {
        console.log(`El valor de ${clave} es par: ${valor}`);
    }
});