const projetos = [
  { nome: "Projeto 1 - Python", arquivo: "projetos/projeto1.py" },
  { nome: "Projeto 2 - JavaScript", arquivo: "projetos/projeto2.js" },
  { nome: "Projeto 3 - HTML", arquivo: "projetos/projeto3.html" }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(proj => {
  const item = document.createElement("li");
  item.innerHTML = `<strong>${proj.nome}</strong><br><a href="${proj.arquivo}" target="_blank">Ver código</a>`;
  lista.appendChild(item);
});
