"use strict";
let n1 = 10;
let n2 = 25;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    if (soma > 40) {
        return 'Soma maior que 40';
    }
    else {
        return 'Soma menor que 40';
    }
}
console.log(soma(n1, n2));
