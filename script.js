const projetos = [
  { nome: "Projeto 1", arquivo: "projetos/App.js" },
  { nome: "Projeto 2", arquivo: "projetos/App0krty.js" },
  { nome: "Projeto 3", arquivo: "projetos/AppHello.js" },
  { nome: "Projeto 4", arquivo: "projetos/TransactionForm.js" },
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(proj => {
  const item = document.createElement("li");
  item.innerHTML = `<strong>${proj.nome}</strong><br><a href="${proj.arquivo}" target="_blank">Ver código</a>`;
  lista.appendChild(item);
});
