/*  Herança, herda todos os atributos da sua classe pai (parecido com extends)

    existem 4 encapsulamentos para atributos e métodos da classe
    public, private, protected, readonly(apenas atributos)
    
    >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da 
    classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

    >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados, 
    Ou seja ele nao pode ser acessado ou modificado fora da classe em que foi criado.

    >> E o famoso readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
    nao podemos alterar ele. */

class Usuario{
    protected id: number;
    nome: string;
    email: string;

    constructor(id:number, nome: string, email: string){
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

}

class Admin extends Usuario{
    cargo: string;
    nivel: number;

    constructor(id:number, nome: string, email: string, cargo: string, nivel: number){
        super(id, nome, email) // precisa ser o primeiro item, chama os atributos da classe pai

        this.cargo = cargo;
        this.nivel = nivel;
    }

    protected mudarCargo(cargo: string):void {
        console.log("ALTERANDO CARGO PARA: " + cargo);
        console.log("ID DO USUARIO", this.id)
    }

    acessarAdmin():void {
        this.mudarCargo("Designer");
    }
}

const usuario1 = new Admin(1, "Leonardo", "teste@teste.com", "Programador", 1)

//usuario1.mudarCargo();
usuario1.acessarAdmin();

usuario1.cargo = "Designer";

//console.log(usuario1)