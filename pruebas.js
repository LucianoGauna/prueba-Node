// ---ARRAYS---
//Creando arrays dentro de otros arrays
const a = [0, "perro", true, ["a", "c", 2, [2, "f"]]];
console.log(a[3][3][0]);

//Esta forma de declarar arrays ya está en desuso
const b = new Array("a", "b", "c", 8, 9, 2);
console.log(b);