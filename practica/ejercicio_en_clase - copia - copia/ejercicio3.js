function espalindromo(numero) {
    let numOriginal = numero;
    let numInvertido = 0;
    while (numero > 0) {
        const ultimodigito = numero % 10;
        numInvertido = numInvertido * 10 +
        ultimodigito;
        numero = Math.floor(numero / 10)
    }
}