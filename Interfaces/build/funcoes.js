"use strict";
const novoCurso = {
    id: "1",
    nome: "Typescript",
    preco: 25,
    promocao: (preco) => {
        console.log(`Promoção no curso por apenas: R$ ${preco} `);
    }
};
console.log(novoCurso);
console.log(novoCurso.promocao(350));
let somaNumeros = (valor1, valor2) => {
    console.log("Resultado: ", valor1 + valor2);
    return (valor1 + valor2);
};
let resultado = somaNumeros(15, 10);
console.log("Resultado da variável: ", resultado);
