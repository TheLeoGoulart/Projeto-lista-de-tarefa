"use strict";
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}
function logUsuario(uuid) {
    console.log(`Conta referente ao ID: ${uuid}`);
}
acessar(123, "Matheus");
logUsuario("123");
function comprarItem(moedas) {
    console.log("Comprando com a Moeda", moedas);
}
comprarItem("BRL");
