/*
    Uma classe armazena as características e as ações que esse objeto vai possuir;
    <Conjunto de atributos e métodos>
*/
type Status = "ABERTO" | "FECHADO"

class Loja{
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string){
        this.nome = nome;
        this.categoria = categoria;
    }

    criarLoja(): void{
        console.log(`Loja ${this.nome}, Categoria: ${this.categoria}`);
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string{
        pedidos.map( (pedido) =>{
            console.log(`Saindo novo pedido: ${pedido}`)
        })

        return `Pedido na mesa ${mesa}`;
    }

    mudarStatus(status: Status): void{
        if(status === "ABERTO"){
          console.log("LOJA ABERTA COM SUCESSO!");
        }else{
            console.log("LOJA FECHADA!");
        }
    }

}

const mequi = new Loja("Mequi", "Fast-food");

//console.log(mequi.nome, mequi.categoria);

mequi.criarLoja();

let mesa = mequi.emitirPedido(7, "X-Bacon", "Tampico", "Coca Ks");
console.log(mesa)

mequi.mudarStatus("ABERTO");