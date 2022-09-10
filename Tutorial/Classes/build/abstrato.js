"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("=============");
        console.log(`Nova conta P.Física criada com sucesso ${dados.nome}`);
        console.log("=============");
        return true;
    }
}
const joana = new PessoaFisica();
joana.abrirConta({
    nome: "Joana Silva",
    numero: "1245-0",
    endereco: "Rua 15, vila Everest"
});
