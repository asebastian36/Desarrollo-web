// numero1, 2 son parametros con un valor por default es 0
function sumar(numero1 = 0, numero2 = 0) {
    console.log(  numero2 + numero1);
}

// Argumentos o los valores reales
sumar(10, 5);
sumar(3, 3);
sumar(3, 6);
sumar(1);

const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);