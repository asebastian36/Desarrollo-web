// Arreglos o Arrays

const numeros = [10,20,30,40,50];

//  nota se pueden mezclar valores en los arreglos

// Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// Conocer la extensión de un arreglo
// console.log(meses.length);

//  recorrer un objeto
// numeros.forEach( function(numero) {
//     console.log(numero);
// })

//  agregar valores
numeros.push(60,70,80); // Al final del arreglo
numeros.unshift(-10,-20,-30); // al inicio del arreglo

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop(); // elimina el último elemento
// meses.shift(); // elimina el primer elemento

//  para eliminar valores intermedios
// meses.splice(2, 1);

// Rest Operator o Spread Operator
const nuevoArreglo = [ ...meses, 'Junio'];
console.log(nuevoArreglo);
