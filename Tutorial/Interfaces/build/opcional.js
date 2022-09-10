"use strict";
const novoUsuario = {
    nome: "Leonardo",
    email: "teste@teste.com",
    status: true,
};
const novoUsuario2 = {
    email: "teste@teste.com",
    status: true,
};
function novoUser(propriedades) {
    console.log(propriedades.email);
}
novoUser({ nome: "Ana", email: "teste1@teste.com", status: false });
