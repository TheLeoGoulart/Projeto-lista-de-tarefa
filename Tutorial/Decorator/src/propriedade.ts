
function validaNome(tamanho: number){
    // Target constructor da classe, Key da propriedade
    return (target: any, key:string) => {
        let valor = target[key];

        const getter = () => valor;

        const setter = (value: string) =>{
            if (value === ""){
                console.log("Você não pode deixar em branco");
            } else if(value.length < tamanho){
                console.log("Tamanho mínimo não exigido")
            } else{
                valor = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })

    }
}

class Jogo{
    @validaNome(5)
    nome:string;

    @validaNome(15)
    titulo: string;

    constructor(nome:string, titulo: string){
        this.nome = nome;
        this.titulo = titulo;
    }
}

const jogo1 = new Jogo("GTA-V", "Jogo multiplayer")

console.log(jogo1.nome, jogo1.titulo);