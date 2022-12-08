/*Crear una estructura para almacenar un conjunto de películas*/
let peliculas = ["Turno de Día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];

/*Más tarde desde la producción indicaron que la película más vendida era: ‘Thor:
amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha
película y con letras en mayúsculas*/
function toUpper(pelicula){
    return pelicula.toUpperCase();
}

//Busco la película que quiero
let indexPeli = peliculas.indexOf("Thor: amor y trueno");

let peliQuieroVer = peliculas.splice(indexPeli, 1);
console.log("peli que quiero ver", peliQuieroVer, peliculas);

//Pasar a mayúscula
let peliEnMayuscula = toUpper(peliQuieroVer[0]);
console.log("\nPelícula en mayúscula: ", peliEnMayuscula); 

//Agregar Thor al array, pero en primer lugar
peliculas.unshift(peliEnMayuscula);
console.log(peliculas);

/*crear una cadena de texto para las siguientes películas próximas a estrenar: Counter-Strike, NOP, Vértigo, Nick, Avatar.*/
let nuevasPeliculas = "Counter-Strike, NOP, Vértigo, Nick, Avatar";

let nuevoArrayPeliculas = nuevasPeliculas.split(", ");
console.log("\nNuevo array de películas: ", nuevoArrayPeliculas);

/*Una de las programadoras del equipo indica que la primera película incorporada a la estructura no es una película sino un video juego. Por tal motivo, te encomiendan la tarea de excluir dicho elemento de la estructura. Asumimos que no conozco la posición de la película, por lo tanto uso indexOf y no shift*/

let juegoARemover = nuevoArrayPeliculas.indexOf("Counter-Strike");

let removerPeli = nuevoArrayPeliculas.splice(juegoARemover, 1); 
console.log("\nTítulo eliminado y apartado del array: ", removerPeli, nuevoArrayPeliculas);

/* El Tech Leader te solicita crear una función que reciba por parámetro ambas estructuras creadas y debe devolver un nueva nueva estructura con todas las películas*/

function concatenacion(array1, array2){
    return array1.concat(array2);
}

console.log("\nConcatenando ambos arrays", concatenacion(peliculas, nuevoArrayPeliculas));