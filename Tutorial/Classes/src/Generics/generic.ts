/*
 Permite a criaçõa de estruturas adaptaveis a varios tipos de dados.
 Permite uma melhor reaproveitação do código.   
    
 Pode ser usados em funções, types, classes interfaces

 Alguns padrões de generics: 
 S => State;
 T => Type;
 K => Key;
 V => Value;
 E => Element;

*/

function repositorio<T extends string | number>(){
    let dados: T;

    function getDados(){
        return dados;
    }

    function setDados(novoDado: T){
        dados = novoDado;
    }

    return {getDados, setDados};
}

const repo1 = repositorio<string>();
const repo2 = repositorio<number>();
//const repo3 = repositorio<boolean>();

repo1.setDados("15");
console.log(repo1.getDados());

repo2.setDados(15);
console.log(repo2.getDados());