class Jogo{
    private servidor: string;
    private id: string = "1234";

    constructor(servidor: string){
        this.servidor = servidor;
    }

    //Método GET serve para pegar o valor ao invés de acessar a propriedade direto
    get getServidorIP(){
        console.log("== Método Get ==");
        return this.servidor;
    }

    set setServidorIP(novoIp: string){
        if(this.servidor === novoIp)
        {
            throw new Error("O novo IP deve ser diferente do IP antigo.");
        }
        this.servidor = novoIp;
    }

}

const RedDead = new Jogo("192.168.15-8");

RedDead.setServidorIP ="192.168.20-9";

console.log(RedDead.getServidorIP);