"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    mostraId() {
        console.log(`ID DO USUARIO: `, this.id);
    }
}
const ana = new Pessoa("Ana Clara", 29);
ana.mostraId();
console.log(ana);
