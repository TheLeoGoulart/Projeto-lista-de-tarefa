type DadosConta = {
    nome: string;
    numero: string;
    endereco: string;
}

abstract class ContaBanco{

    abstract abrirConta(dados: DadosConta): boolean;

}

class PessoaFisica extends ContaBanco{
    abrirConta(dados: DadosConta): boolean{
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
})