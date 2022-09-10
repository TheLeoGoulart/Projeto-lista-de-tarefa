"use strict";
const BurguerK = {
    nome: "BK",
    endereco: "Rua X",
    status: true,
};
console.log(BurguerK);
function novaloja({ nome, endereco, status }) {
    console.log(`Nome ${nome} criado com sucesso`);
    console.log(`Endereco da loja é ${endereco}`);
    console.log(`Status da loja é ${status}`);
    console.log("============================");
}
novaloja({ nome: "Subway", endereco: "Rua Y", status: false });
novaloja({ nome: "Mequi", endereco: "Rua Z", status: true });
