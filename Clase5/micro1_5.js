function montoAPagar (tipoDeVehiculo, diasDeAlquiler, sillaParaBebe) {
    if(tipoDeVehiculo === "compacto" && sillaParaBebe === false){
        
        let totalAPagar = diasDeAlquiler * 14000;
        return totalAPagar;
    }else if(tipoDeVehiculo === "compacto" && sillaParaBebe === true){
        
        let totalAPagar = diasDeAlquiler * 14000      
        let totalAPagar2 = totalAPagar + (diasDeAlquiler * 1200); 
        return totalAPagar2;
    }     
    if(tipoDeVehiculo === "mediano" && sillaParaBebe === false){

        let totalAPagar = diasDeAlquiler * 17000;
        return totalAPagar;
    }else if(tipoDeVehiculo === "mediano" && sillaParaBebe ===true){
        
        let totalAPagar = diasDeAlquiler * 17000;
        let totalAPagar2 = totalAPagar + (diasDeAlquiler * 1200);
        return totalAPagar2;
    }
    if(tipoDeVehiculo === "camioneta" && sillaParaBebe === false){

        let totalAPagar = diasDeAlquier * 28000;
        return totalAPagar;
    }else if(tipoDeVehiculo === "camioneta" && sillaParaBebe === true){
       
        let totalAPagar = diasDeAlquiler * 28000;
        let totalAPagar2 = totalAPagar + (diasDeAlquiler * 1200);
        return totalAPagar2;
    }

}

console.log("Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días utilizados, el monto total a pagar es de $" + "" + montoAPagar("camioneta", 5, true));