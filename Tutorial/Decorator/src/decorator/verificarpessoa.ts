
/*export function verificaPessoa(idade: number){
    return (target: any, key: string, descriptor: PropertyDescriptor) =>{

    const metodoOriginal = descriptor.value // Salvar método original

    descriptor.value = function(){
        if (idade < 18){
            console.log("Menor de Idade cadastrado");
        } else {
            console.log("Adulto cadastrado");
        }
        return metodoOriginal.apply(this);
    }
    }
} */
