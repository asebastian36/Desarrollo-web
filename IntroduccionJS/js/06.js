// Objeto Math

let resultado;

//  numeros aleatorios menores a 1
resultado = Math.random();

//  constante pi
resultado = Math.PI;

//  redondeo
resultado = Math.round(2.5);
resultado = Math.ceil(2.1); // Ceil siempre redondea hacia arriba

// Floor siempre redondea hacia abajo
resultado = Math.floor(2.9);


resultado = Math.sqrt(144);
resultado = Math.abs(-200);

//  min numero de un listado
resultado = Math.min( 3, 5, 1, 8 , 2, 10 );

//  numero mayor de un listado
resultado = Math.max( 3, 5, 1, 8 , 2, 10 );

//  numeros aleatorios mayores a 1
resultado = Math.floor( Math.random() * 30 );

console.log(resultado);