interface IprodutoProps{
    readonly id: string;
    nome: string;
    descricao: string;
}

let produto1: IprodutoProps = {
    id: "1",
    nome:"Nike Air",
    descricao: "Tenis classudo",
}

//produto1.id = 123;
produto1.descricao = "Tênis classudo";

console.log(produto1);