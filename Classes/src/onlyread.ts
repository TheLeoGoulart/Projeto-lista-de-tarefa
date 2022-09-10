class Pessoa{
    readonly id: string = "123";
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    mostraId(){
        //this.id = "9000"
        console.log(`ID DO USUARIO: `, this.id);
    }
}

const ana = new Pessoa("Ana Clara", 29);

ana.mostraId();
console.log(ana);