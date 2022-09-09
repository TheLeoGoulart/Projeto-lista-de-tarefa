interface IcursoProps{
    id: string;
    nome: string;
    preco: number;

    //Definir apenas a função e o que ela deve esperar retornar
    promocao: (preco:number) => void;
}

//function mostraPromocao(preco: number){
//    console.log(`Promoção no curso por apenas: R$ ${preco} `);
//}

const novoCurso: IcursoProps = {
    id: "1",
    nome: "Typescript",
    preco: 25,
    promocao: (preco: number): void => {
        console.log(`Promoção no curso por apenas: R$ ${preco} `);
    }
}
console.log(novoCurso)
console.log(novoCurso.promocao(350))

interface IsomaProps {
    (valor1: number, valor2: number): number;
}

let somaNumeros: IsomaProps = (valor1: number, valor2:number): number =>{
    console.log("Resultado: ", valor1 + valor2);

    return (valor1 + valor2)
}

let resultado = somaNumeros(15,10);
console.log("Resultado da variável: ", resultado);