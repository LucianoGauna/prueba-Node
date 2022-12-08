let operaciones = [180000, -15000, -45000, 25000, -35000, -2000];

function saldos(callback){
    let saldoDepositos = 0;
    let saldoRetiros = 0;
    let saldoActual = 0;

    for(i=0;i<operaciones.length;i++){
        let accion = operaciones[i];
        if(accion>0){
            saldoDepositos += accion;
            saldoActual += accion;
        }else{ 
            saldoRetiros += accion;
            saldoActual += accion;    
        }   
    } 
    
    return "Estimado Luciano Gauna, el monto total de los depósitos es de: $" + saldoDepositos + "\n\nEl monto total de los retiros es de: $" + saldoRetiros + "\n\nPor lo tanto, su saldo actual en la cuenta es de: $" + saldoActual;  
}

console.log(saldos(operaciones));