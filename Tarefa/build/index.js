"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input#tarefa");
let buttonElement = document.querySelector("#app button");
let radioElementU = document.querySelector("#app input#urgente");
let radioElementA = document.querySelector("#app input#atencao");
let radioElementS = document.querySelector("#app input#sem_prazo");
let listaSalva = localStorage.getItem("@listagem_tarefas");
let tarefas = listaSalva !== null && JSON.parse(listaSalva) || [];
function listarTarefas() {
    listElement.innerHTML = "";
    tarefas.map(function (item, cont) {
        const ant = cont - 1;
        if (item === " <URGENTE> ") {
            document.getElementById(`${ant}`).style.color = "#f00";
        }
        else if (item === " <ATENÇÂO> ") {
            document.getElementById(`${ant}`).style.color = "rgba(233, 161, 6, 0.625)";
        }
        else if (item === " <SEM PRAZO> ") {
            document.getElementById(`${ant}`).style.color = "rgb(15, 92, 21)";
        }
        else {
            let todoElement = document.createElement("li");
            todoElement.id = `${cont}`;
            let tarefaText = document.createTextNode(item);
            todoElement.appendChild(tarefaText);
            listElement.appendChild(todoElement);
        }
    });
}
listarTarefas();
function adicionarTarefa() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        let tarefaDigitada = inputElement.value;
        let prioridade = "";
        if (radioElementU.checked === true) {
            prioridade = " <URGENTE> ";
        }
        else if (radioElementA.checked === true) {
            prioridade = " <ATENÇÂO> ";
        }
        else if (radioElementS.checked === true) {
            prioridade = " <SEM PRAZO> ";
        }
        tarefas.push(tarefaDigitada, prioridade);
        inputElement.value = "";
        listarTarefas();
        salvarDados();
    }
}
buttonElement.onclick = adicionarTarefa;
function salvarDados() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}
