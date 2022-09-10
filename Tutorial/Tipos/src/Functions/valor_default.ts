// Deixar um valor default ou deixar ele opcional.

function cadastro(email: string, senha:string, nome = "Aluno", idade?:number): void{
    let data = {email, senha, nome, idade};

    console.log(data);
}

cadastro("teste@teste.com","123123","Leonardo", 19);
cadastro("teste1@teste.com","1241234",);

//function cadastroLoja (nome: string, email: string, status = true): boolean{
//    console.log("Status atual da loja: " + status);

//    return status;
//}

//cadastroLoja("BK", "bk@teste.com");