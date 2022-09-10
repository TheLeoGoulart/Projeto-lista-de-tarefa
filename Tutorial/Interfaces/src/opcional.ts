interface IcadastroProps{
    nome?: string;
    email: string;
    status: boolean;
}

const novoUsuario: IcadastroProps = {
    nome: "Leonardo",
    email: "teste@teste.com",
    status: true,
}

const novoUsuario2: IcadastroProps = {
    email: "teste@teste.com",
    status: true,
}

//console.log(novoUsuario);
//console.log(novoUsuario2);

function novoUser (propriedades: IcadastroProps){
    console.log(propriedades.email);
}

novoUser({nome: "Ana", email: "teste1@teste.com", status: false});