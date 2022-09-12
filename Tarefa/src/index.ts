let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input#tarefa") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;
let radioElementU = document.querySelector("#app input#urgente") as HTMLInputElement;
let radioElementA = document.querySelector("#app input#atencao") as HTMLInputElement;
let radioElementS = document.querySelector("#app input#sem_prazo") as HTMLInputElement;

let listaSalvaU: string | null = localStorage.getItem("@listagem_tarefasU");
let listaSalvaA: string | null = localStorage.getItem("@listagem_tarefasA");
let listaSalvaS: string | null = localStorage.getItem("@listagem_tarefasS");

let tarefasU: string[] = listaSalvaU !== null && JSON.parse(listaSalvaU) || [];
let tarefasA: string[] = listaSalvaA !== null && JSON.parse(listaSalvaA) || [];
let tarefasS: string[] = listaSalvaS !== null && JSON.parse(listaSalvaS) || [];

function listarTarefas(){
    listElement.innerHTML = "";

    tarefasU.map (function (item, cont){
        listar(item, cont,2);
    })

    tarefasA.map (function (item, cont){
        listar(item, cont,1);
    })

    tarefasS.map (function (item, cont){
        listar(item, cont,0);
    })
}

listarTarefas();

function adicionarTarefa(){
    if(inputElement.value === ""){
        alert("Digite alguma tarefa!")
        return false;
    }else{
        let tarefaDigitada: string = inputElement.value;
        if (radioElementU.checked === true){
            tarefasU.push(tarefaDigitada);
        } else if(radioElementA.checked === true){
            tarefasA.push(tarefaDigitada);
        } else if(radioElementS.checked === true){
            tarefasS.push(tarefaDigitada);
        }
        inputElement.value = "";

        listarTarefas();
        salvarDados();
    }
}

buttonElement.onclick = adicionarTarefa

function salvarDados(){
    localStorage.setItem("@listagem_tarefasU", JSON.stringify(tarefasU));
    localStorage.setItem("@listagem_tarefasA", JSON.stringify(tarefasA));
    localStorage.setItem("@listagem_tarefasS", JSON.stringify(tarefasS));
}

function deletarTarefa(posicao: number, priori: number){
    if (priori === 2 ){
        tarefasU.splice(posicao, 1);
    } else if (priori === 1){
        tarefasA.splice(posicao, 1);
    } else {
        tarefasS.splice(posicao, 1);
    }

    listarTarefas();
    salvarDados(); 
}

function listar(item: string, cont: number, cor:number){       
        let todoElement = document.createElement("li");
        todoElement.id = `${cont}`;
        let tarefaText = document.createTextNode(item);
            
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        
        let posicao: number = -1;
        if(cor === 2){
            posicao = tarefasU.indexOf(item);
        } else if(cor === 1){
            posicao = tarefasA.indexOf(item);
        } else if(cor === 0){
            posicao = tarefasS.indexOf(item);
        }
        linkElement.setAttribute("onclick", `deletarTarefa(${posicao},${cor})`);
        linkElement.setAttribute("style", "margin-left: 10px");

        let linkTest = document.createTextNode("Feito");
        linkElement.appendChild(linkTest);

        todoElement.appendChild(tarefaText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

        if(cor === 2){
            todoElement.style.color = "Red";
        } else if(cor === 1){
            todoElement.style.color = "rgba(233, 161, 6, 0.625)";
        } else if(cor === 0){
            todoElement.style.color = "rgb(15, 92, 21)";
        }
}