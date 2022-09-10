"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, Categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("LOJA ABERTA COM SUCESSO!");
        }
        else {
            console.log("LOJA FECHADA!");
        }
    }
}
const mequi = new Loja("Mequi", "Fast-food");
mequi.criarLoja();
let mesa = mequi.emitirPedido(7, "X-Bacon", "Tampico", "Coca Ks");
console.log(mesa);
mequi.mudarStatus("ABERTO");
