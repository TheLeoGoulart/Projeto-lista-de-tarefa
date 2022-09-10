"use strict";
class Conta {
    constructor() {
        this.limite = 450;
    }
    aumentarlimite(qtd) {
        if (qtd < 1000) {
            this.limite = qtd;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
        else {
            console.log(`Infelizmente seu limite foi reprovado`);
        }
    }
    solicitarlimite(qtd) {
        return this.aumentarlimite(qtd);
    }
    solicitarlimiteApp(autenticado, qtd) {
        if (autenticado) {
            this.aumentarlimite(qtd);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteContaAfiliadpo() {
        return this.solicitarlimite(1500);
    }
}
const fulano = new Conta();
const joao = new BancoAfiliado();
fulano.solicitarlimiteApp(true, 700);
joao.limiteContaAfiliadpo();
console.log(fulano);
console.log(joao);
