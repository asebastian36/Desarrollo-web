//  Tipos de datos

//  3 maneras de declarar un String
const producto = "Monitor \"27\"";
const producto2 = "Teclado";
const producto3 = String("Mouse");

//  para revisar el tipo de dato
console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);

console.log(producto);
console.log(producto.length);

//  para buscar si una palabra esta en la cadena retorna el indice
console.log(producto.indexOf("Monitor"));

//  retorna boolean
console.log(producto.includes("Monitor"))