function convertirAMayuscula(cadena){
    return cadena.toUpperCase();
};

function tipoDeDato(parametro){
    return typeof parametro
}

function edadDePerros(anios){
    return anios * 7;
}

function horaDeTrabajo(salarioMensual, diasTrabajados, horasPorDia){
    let dia = salarioMensual/diasTrabajados;
    let total = dia/horasPorDia;
    return total;
}

console.log(horaDeTrabajo(30000, 20, 8));
