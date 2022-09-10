type Uuid = number | string | null;

function acessar(uuid: Uuid, nome: string){
    console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}

function logUsuario(uuid: Uuid){
    console.log(`Conta referente ao ID: ${uuid}`);
}

acessar(123, "Matheus");

logUsuario("123");
type Moedas = "BRL" | "EUR" | "USD"

function comprarItem(moedas: Moedas){
    console.log("Comprando com a Moeda", moedas);
}

comprarItem("BRL");