/*
2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. 
Las lentejas y el arroz no pagan IVA, el vino y la crema si. 
Cree un programa que reciba el nombre de alguno de los productos 
mencionados y muestre si el producto paga IVA o no.
 Realice una versión con condicionales y otra con estructura
switch-case.
*/

let nombre = prompt("Por favor ingrese el nombre del producto que desea \n1)lentejas \n2)crema \n3)arroz \n4)vino")

//condicion
if (nombre == "lentejas" || nombre == "arroz"){
    console.log("El produto que ha elegido no paga el IVA");
    
}else if (nombre == "crema" || nombre == "vino" ){
    console.log("El producto que ha elegido paga IVA");
    
}else{
    console.log("El producto que ha seleccionado no se encuentra en la lista de disponibles");
    
}