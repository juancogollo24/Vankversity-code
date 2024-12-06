function generartabla(cadena) {
    const tabla = document.createElement('table');
    for (let i = 0; i < cadena.length; i++) {
        const fila = document.createElement('tr');
         for (let j = 0; j < cadena.length; j++) {
            const celda = document.createElement('td');
            celda.textContent = cadena[i] + cadena[j];
            fila.appendChild(celda);
         }
         tabla.appendChild(fila);
        }
        document.body.appendChild(tabla);
    }

    const cadena = "xyz";
    generartabla(cadena);