interface ItecnologiaProps{
    id: string;
    nome: string;
    descricao?: string;
}

interface InomesProps{
    tecnologia: ItecnologiaProps[];
}

let frontend: InomesProps = {
    tecnologia: [
        {id: "12", nome: "ReactJS", descricao: "Biblioteca" },
        {id: "13", nome: "VueJS" }
    ]
}

console.log(frontend.tecnologia);