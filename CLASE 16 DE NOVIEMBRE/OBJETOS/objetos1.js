/*
Cree un objeto donde se almacenen los productos de un supermercado con su respectivo
precio. Los productos son:
Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el
objeto anterior con su respectivo producto
*/

const productosSupermercado = {
    papa: 2.5,
    arroz: 3.2,
    lentejas: 4.0,
    aceite: 5.5
  };
  for (const producto in productosSupermercado) {
    console.log(`${producto}: $${productosSupermercado[producto]}`);
  }