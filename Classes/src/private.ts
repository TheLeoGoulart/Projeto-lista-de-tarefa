class Conta{
    private limite: number = 450;

    private aumentarlimite(qtd: number){
        if (qtd < 1000){
        this.limite = qtd;
        console.log(`Agora seu limite é: ${this.limite}`);}
        else{
            console.log(`Infelizmente seu limite foi reprovado`);
        }
    }
    
    protected solicitarlimite(qtd: number){
        return this.aumentarlimite(qtd);
    }

    solicitarlimiteApp(autenticado: boolean, qtd: number): void | boolean{
        if(autenticado){
            this.aumentarlimite(qtd);
        }else{
            return false;
        }
    }

}

class BancoAfiliado extends Conta{
    
    limiteContaAfiliadpo(){
        //return this.aumentarLimit(800); private
        return this.solicitarlimite(1500); // protected
    }
}

const fulano = new Conta();
const joao = new BancoAfiliado();

fulano.solicitarlimiteApp(true, 700)
joao.limiteContaAfiliadpo();

console.log(fulano);
console.log(joao);