//function login (username: string | number): void | string{
    //let message = "Bem vindo " + username;
    //console.log(message);
    
    //return username (inválido pois especificado acima void)

//}

//login("Sujeito Programador");

//function outrologin (username: string): boolean{
//    let message = "Bem vindo " + username;
//    console.log(message);

//    return true;
//}

//const retornofuncao = outrologin("Sujeito Programador");
//console.log(retornofuncao);

let n1: number = 10;
let n2: number = 25;

function soma(valor1: number, valor2:number): string {
    let soma = valor1 + valor2;

    if(soma > 40){
    return 'Soma maior que 40'}
    else{
    return 'Soma menor que 40'}

}
console.log(soma(n1, n2));