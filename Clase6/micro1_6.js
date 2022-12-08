let electrodomesticos = ["microondas","heladera","cafetera","lavarropa","cocina","aireAcondicionado"];
/*Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por
la consola los resultados.*/
let electroAleatorio = electrodomesticos.indexOf("cocina");
console.log("aleatorio", electroAleatorio);
/*Extraer el primer elemento del array y agregarlo al final del mismo.*/
let extraer = electrodomesticos.shift();
console.log("\nprimer elemento extraído", extraer, electrodomesticos);

electrodomesticos.push("microondas");
console.log("\nagregar el primer elemento al final del array", electrodomesticos);
/*Agregar al final del array dos (2) nuevos productos.*/
let nuevosProductos = electrodomesticos.push("mixer", "licuadora");
console.log("\nAgregando dos nuevos elementos al final del array, el mismo quedaría así: ", electrodomesticos);
/*Mostrar por la consola la cantidad de elementos que contiene el array.*/
console.log("\nLa cantidad de elementos que contiene el array es de: ", electrodomesticos.length);
/*Buscar un elemento del array y crear una condición responsable de establecer si
existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”.*/
let buscarElemento = electrodomesticos.includes("aireAcondicionado");

if(buscarElemento == true){
    console.log("\nProducto encontrado");
}else{
    console.log("El producto buscado no existe");
}
/*Unificar todos los elementos del array en una cadena de texto (string), separando los
elementos por espacios en blanco.*/
let unificarElementos = electrodomesticos.join(" ");
console.log("\nUnificando todos los elementos en una cadena de texto, resultaría lo siguiente: ", unificarElementos);
/*Determinar la cantidad de elementos que posee la cadena de texto obtenida.*/
let longitudDeCadena = unificarElementos.length;
console.log("\nLa cantidad de elementos que posee la cadena de texto es de", longitudDeCadena, "caracteres");
/*Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
función adecuada para ello*/;
let cambiarNombre = unificarElementos.replace("lavarropa", "batidora");
console.log("\nEliminando el lavarropa, y agregando una batidora a la nueva lista de productos, la misma quedaría: ", cambiarNombre);
/*Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
una coma.*/
let nuevoArray = unificarElementos.split(" ");
console.log("El nuevo array, separado por comas sería: ", nuevoArray);
