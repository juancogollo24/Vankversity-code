function calcularPromedio(nota1, nota2, nota3){
    let promedio = (nota1+nota2+nota3)/3
    return promedio
}

function esAprobado(promedio){
    let aprobado
    if(promedio>=6){
        aprobado = true
    } else {
        aprobado = false
    }
    return aprobado
}

function mostrarResultado(aprobado){
    if(aprobado == true){
        console.log("El estudiante aprobó")
    } else {
        console.log("El estudiante no aprobó")
    }
}
