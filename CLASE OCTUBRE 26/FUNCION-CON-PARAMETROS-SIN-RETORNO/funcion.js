/*
ALGUNAS FUNCIONES TIENEN PARAMETROS PERO NO  RETORNO,
SON USADAS GENERALMENTE PARA FORMATEAR MENSAJES, CAMBIAR
ESTADOS DE UNA VARIABLE ENTRE OTROS.
*/

function mostrarMensaje(Nombre, Apellido) {
    let mensaje = `Hola ${Nombre} ${Apellido}`;
    console.log(mensaje);
}
mostrarMensaje("Maria","Perez")

function MostrarMensaje2(Nombres,Apellidos) {
    let mensaje = `Hola estimado ${Nombres} ${Apellidos}`;
    console.log(mensaje);
}
MostrarMensaje2("Juan Carlos","Perez Garcia")