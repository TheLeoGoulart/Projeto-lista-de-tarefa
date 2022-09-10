"use strict";
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro("teste@teste.com", "123123", "Leonardo", 19);
cadastro("teste1@teste.com", "1241234");
