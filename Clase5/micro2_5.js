let totalAPagar = (tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla) => {
    let total = 0;
    switch(tipoDeHamburguesa){
        case "carne a la parrilla": total += 1800;
        break;
        case "pollo": total += 1500;
        break;
        case "vegetariana": total += 1200;
        break;
        default: "no contamos con esa variedad de hamburguesa";
    }
    
    
    jamon ? total += 30 : total +=  0;
    queso ? total += 25 : total += 0;
    salsaDeTomate ? total += 5 : total += 0;
    mayonesa ? total += 5 : total += 0;
    mostaza ? total += 5 : total += 0;
    tomate ? total += 15 : total += 0;
    lechuga ? total += 10 : total += 0;
    cebolla ? total += 10 : total += 0;

    return total;

}
function mensaje(nombre, apellido, tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla, callback){

    return "Estimado " + nombre + " " + apellido + ", el monto a pagar es $" + callback(tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla);

}

console.log(mensaje("Luciano", "Gauna", "carne a la parrilla", true, true, false, false, false, true, true, true, totalAPagar));