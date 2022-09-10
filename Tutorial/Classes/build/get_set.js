"use strict";
class Jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    get getServidorIP() {
        console.log("== Método Get ==");
        return this.servidor;
    }
    set setServidorIP(novoIp) {
        if (this.servidor === novoIp) {
            throw new Error("O novo IP deve ser diferente do IP antigo.");
        }
        this.servidor = novoIp;
    }
}
const RedDead = new Jogo("192.168.15-8");
RedDead.setServidorIP = "192.168.20-9";
console.log(RedDead.getServidorIP);
