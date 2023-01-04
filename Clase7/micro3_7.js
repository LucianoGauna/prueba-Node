function diezNumerosSiguientes(value){
    for (let i = 0; i <= 10; i++) {
        console.log(`${value + i}` );;
        
    }
}

//diezNumerosSiguientes(10);

function saltoDeTres(){
    for (let i = 0; i < 58; i+=3) {
        console.log(i)
    }
}

//saltoDeTres()

function pasarAMayuscula(texto){
    return texto.toUpperCase()
}

//console.log(pasarAMayuscula('practicando el uso de los ciclos o búcles'))

let numeros = [1, 3, 45, 66, 78, 42, 12, 9, 7, 10];

function devolverPositivos(array){
    return array.filter(numero => numero%2===0)
}

//console.log(devolverPositivos(numeros));

