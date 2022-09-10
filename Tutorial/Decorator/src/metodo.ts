// Decorator de método só é chamado quando nosso método for chamado em algum lugar
//import { verificaPessoa } from './decorator/verificarpessoa'

class Pessoa{
    nome: string;

    constructor(nome:string){
        this.nome = nome;
    }
    //@verificaPessoa(16)
    cadastrarPessoa(){
        console.log(`Bem vindo ao sistema, ${this.nome}.`)
    }
}

const pessoa1 = new Pessoa("Leonardo");

pessoa1.cadastrarPessoa();