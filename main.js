function envio() {
  const tarefaInput = document.getElementById("tarefa");

  if (!tarefaInput.value) {
    window.alert("tigite uma tarefa !!");
  } else {
    let exists = value.find((x) => x.name == tarefaInput);
    return !exists ? false : true;
  }
}

//// Variáveis
const tarefaInput = document.getElementById("tarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("tarefas");

// Event Listeners
adicionarBotao.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});

// Funções
function adicionarTarefa() {
  const tarefaTexto = tarefaInput.value;
  if (tarefaTexto.trim() !== "") {
    const novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = `
          ${tarefaTexto} <button class="excluir">ok</button>
      `;
    listaTarefas.appendChild(novaTarefa);
    tarefaInput.value = "";
  }
}

listaTarefas.addEventListener("click", function (e) {
  if (e.target.classList.contains("excluir")) {
    e.target.parentElement.remove();
  }
});
