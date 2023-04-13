const novaTarefa = document.querySelector("#novaTarefa");
const botaoAdicionar = document.querySelector("#botaoAdicionar");
const listaTarefas = document.querySelector("#listaTarefas");

let tarefas = [];

function adicionarTarefa() {
  if (novaTarefa.value !== "") {
    tarefas.push({texto: novaTarefa.value, marcada: false});
    atualizarListaTarefas();
    novaTarefa.value = "";
  }
}

function removerTarefa(index) {
  tarefas.splice(index, 1);
  atualizarListaTarefas();
}

function editarTarefa(index) {
  const tarefaEditada = prompt("Editar tarefa", tarefas[index].texto);
  if (tarefaEditada !== null && tarefaEditada !== "") {
    tarefas[index].texto = tarefaEditada;
    atualizarListaTarefas();
  }
}

function marcarTarefa(index) {
  tarefas[index].marcada = !tarefas[index].marcada;
  atualizarListaTarefas();
}

function atualizarListaTarefas() {
  listaTarefas.innerHTML = "";
  for (let i = 0; i < tarefas.length; i++) {
    const divLi = document.createElement("div")
    const li = document.createElement("li");
    const tarefaTexto = document.createTextNode(tarefas[i].texto);
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", () => removerTarefa(i));
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.className = "edit";
    botaoEditar.addEventListener("click", () => editarTarefa(i));
    const botaoMarcar = document.createElement("button");
    botaoMarcar.textContent = tarefas[i].marcada ? "Desmarcar" : "Marcar";
    botaoMarcar.addEventListener("click", () => marcarTarefa(i));
    const divText = document.createElement("div");
    divText.className = "nome-tarefa" + (tarefas[i].marcada ? " marcada" : "");
    divText.appendChild(tarefaTexto);
    const divBotao = document.createElement("div");
    divBotao.className = "botoes-tarefa";
    divBotao.appendChild(botaoRemover);
    divBotao.appendChild(botaoEditar);
    divBotao.appendChild(botaoMarcar);
    li.appendChild(divText);
    li.appendChild(divBotao);
    divLi.appendChild(li);
    listaTarefas.appendChild(divLi);
  }
}

botaoAdicionar.addEventListener("click", adicionarTarefa);
