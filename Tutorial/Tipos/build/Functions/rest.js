"use strict";
function totalVendas(...vendas) {
    const qtdVendas = vendas.length;
    console.log(`Você fez ${qtdVendas} vendas hoje!`);
}
totalVendas(10, 20, 30);
function mostraNomes(...nomes) {
    let totalnomes = nomes.length;
    console.log(totalnomes);
    nomes.map(nome => {
        console.log(nome);
    });
}
mostraNomes("Leonardo", "Pereira", "Bruno");
