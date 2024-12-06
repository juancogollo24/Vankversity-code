function encontrarCadenaConMasTiminas(adn) {
  const cadenasConConteo = adn.map(cadena => ({
    cadena,
    timinas: cadena.split('').filter(base => base === 'T').length
  }));
  const cadenaConMasTiminas = cadenasConConteo.reduce((max, actual) => 
    actual.timinas > max.timinas ? actual : max
  );
  return cadenaConMasTiminas.cadena;
}
//ejemplo de uso
const adn = ["AACCGT", "TTTTGGTA", "GGGGG", "CCCGTAAA"];
const resultado = encontrarCadenaConMasTiminas(adn);
console.log(resultado); // Imprimirá: "TTTTGGTA"