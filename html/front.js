function inicio(){
    let nome = window.prompt("Qual é seu nome?")
    let res = window.document.getElementById("resultado")
    res.innerHTML = `<p> Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#X1FF596;</p>`
}

function inicio2(){
    let nome = window.prompt('Qual é seu nome?')
    window.alert (`Olá, ${nome}! É um prazer te conhecer`)
}//nvm

function media(){
    let nome = window.prompt("Qual o nome do aluno?")
    let nota1 = Number(window.prompt("Qual a primeira nota?"))
    let nota2 = Number(window.prompt("Qual a segunda nota?"))
    let nota3 = Number(window.prompt("Qual a terceira nota?"))
    let media = (nota1 + nota2 + nota3)/3

    let final = document.getElementById("jogarnohtml")
    final.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>, as notas foram: <mark>${nota1}, ${nota2}, ${nota3}</mark>, e a média final foi <mark>${media.toFixed(1)}</mark>.`
}

function trocarcores(){
    let listadecores = ['green','blue','red','white','orange','gray','pink'];
    document.body.style.backgroundColor = listadecores [Math.floor(7*Math.random())];
}