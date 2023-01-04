function reporteDePasajeros(cantidadDeEstaciones){
    let estaciones = [];
    let pasajeros = 0;
    for(i=0;i<=cantidadDeEstaciones.length;i++){
        switch(estaciones){
            case 0: pasajeros += 200;
            estaciones.push(`En la estación ${cantidadDeEstaciones} hay ${pasajeros} pasajeros arriba del tren`);
            break;
            case 1: pasajeros += 20;
            estaciones.push(`En la estación ${cantidadDeEstaciones} hay ${pasajeros} pasajeros arriba del tren`);
            break;
            case 2: pasajeros += 20;
            estaciones.push(`En la estación ${cantidadDeEstaciones} hay ${pasajeros} pasajeros arriba del tren`);
            break;
            case 3: pasajeros += 20;
            estaciones.push(`En la estación ${cantidadDeEstaciones} hay ${pasajeros} pasajeros arriba del tren`);
            break;
            case 4: pasajeros += 20;
            estaciones.push(`En la estación ${cantidadDeEstaciones} hay ${pasajeros} pasajeros arriba del tren`);
            break;
            case 5: pasajeros += 40;
            estaciones.push(`En la estación ${cantidadDeEstaciones} hay ${pasajeros} pasajeros arriba del tren`);
            break;

        }
        
    }


}

console.log(reporteDePasajeros(5));