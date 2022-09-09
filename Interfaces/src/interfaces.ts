//let loja: object;

//loja = {
    //nome: "BK",
    //endereço: "Rua X",
    //status: true,
//}

//Um padrão para descrever a estrutura de um objeto

interface IlojaProps{
    nome: string;
    endereco: string;
    status: boolean;
}

const BurguerK: IlojaProps = {
    nome: "BK",
    endereco: "Rua X",
    status: true,
}

console.log(BurguerK);

function novaloja({nome, endereco, status}: IlojaProps): void{
    console.log(`Nome ${nome} criado com sucesso`);
    console.log(`Endereco da loja é ${endereco}`);
    console.log(`Status da loja é ${status}`);
    console.log("============================");
}

novaloja({nome: "Subway", endereco: "Rua Y", status:false});
novaloja({nome: "Mequi", endereco: "Rua Z", status:true});