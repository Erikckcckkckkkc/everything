// ===== PARTE 1: SELECIONANDO ELEMENTOS QUE JÁ EXISTEM NO HTML =====
// Aqui estamos "pegando" elementos que já foram criados no arquivo HTML
// É como se fosse uma ponte entre o HTML e o JavaScript

const enunciadoPrincipal = document.querySelector(".enunciado-principal"); // Pega a div onde aparece o texto das perguntas
const botaoPrincipal = document.querySelector(".botao-principal"); // Pega o botão que o usuário clica
const inputRange = document.querySelector("#input-range"); // Pega a barra deslizante (slider)
const labelRange = document.querySelector("#lenRange"); // Pega o texto que mostra a % da barra
const inputRadioSim = document.querySelector("#radio-sim"); // Pega o botão de opção "Sim"
const inputRadioNao = document.querySelector("#radio-nao"); // Pega o botão de opção "Não"
const labelRadioSim = document.querySelector("#label-radio-sim"); // Pega o texto "Sim" do botão
const labelRadioNao = document.querySelector("#label-radio-nao"); // Pega o texto "Não" do botão
const imgResultado = document.querySelector(".img-planeta"); // Pega a imagem dos planetas
const textoResultado = document.querySelector(".qtd-planetas"); // Pega onde aparece o resultado final

// ===== PARTE 2: CRIANDO NOVOS ELEMENTOS NO JAVASCRIPT =====
// Aqui estamos criando elementos HTML usando JavaScript
// É como se estivéssemos "construindo" pedaços do HTML dentro do JS

const inputNome = document.createElement("input"); // Cria um campo de texto para o nome
const inputNumber = document.createElement("input"); // Cria um campo numérico (quantas pessoas na casa)
const inputBox = document.createElement("div"); // Cria uma caixa para organizar os botões de rádio
const divRadio1 = document.createElement("div"); // Cria uma div para organizar o botão "Não"
const divRadio2 = document.createElement("div"); // Cria uma div para organizar o botão "Sim"
const divResultado = document.createElement("div"); // Cria uma div para mostrar o resultado final

// ===== PARTE 3: ADICIONANDO CLASSES CSS AOS ELEMENTOS =====
// Classes CSS servem para aplicar estilos (cores, tamanhos, etc.) aos elementos
// É como dar uma "identidade visual" para cada elemento

inputRange.classList.add("input-range"); // Aplica estilo CSS na barra deslizante
inputBox.classList.add("input-box"); // Aplica estilo CSS na caixa dos botões de rádio
divResultado.classList.add("resultado-div"); // Aplica estilo CSS na área do resultado

// ===== PARTE 4: CONFIGURANDO PROPRIEDADES DOS INPUTS =====
// Aqui definimos como os campos de entrada devem se comportar

inputNome.type = "text"; // Define que o campo do nome aceita texto
inputNumber.type = "number"; // Define que o campo aceita apenas nÃºmeros
inputNumber.value = "1"; // Define o valor inicial como 1
inputNumber.min = 1; // Define que o valor mínimo é 1 (não pode ser negativo)

// ===== PARTE 5: VARIÁVEIS PARA CONTROLAR O QUESTIONÁRIO =====
// Essas variáveis guardam informações importantes durante o questionário

const respostas = [5]; // Array que vai guardar as respostas do usuário (inicialmente tem 1 elemento)
let paginaAtual = 0; // Controla em qual pergunta estamos (começa em 0 = tela inicial)
let resultadoFinal; // Vai guardar o total de pontos no final
let qtdPlanetas; // Vai guardar quantos planetas seriam necessários
let nome; // Vai guardar o nome que o usuário digitou
let segundos = 0; // Contador de tempo em segundos
let atualizaTimer; // Variável que controla o timer
let timer; // Objeto para formatar o tempo
let pontos = [5]; // Array que guarda a pontuação de cada pergunta

// ===== PARTE 6: INICIANDO O QUESTIONÁRIO =====
seletorPagina(); // Chama a função que mostra a tela inicial

// ===== PARTE 7: FUNÃ‡ÃO PARA CRIAR O TIMER =====
// Esta função transforma os segundos em um formato de tempo (minutos:segundos)
function criaTimer() {
  timer = new Date(segundos * 1000); // Cria um objeto Date baseado nos segundos
}

// ===== PARTE 8: PRIMEIRO EVENT LISTENER DO BOTÃO =====
// Este "ouvinte" é responsável por controlar o timer
// Event Listener = "fica escutando" quando algo acontece (neste caso, clique no botão)

botaoPrincipal.addEventListener("click", function (evento) {
  evento.preventDefault(); // Impede o comportamento padrão do botão (não recarregar a página)

  // Se estamos na página 1 (primeira pergunta), inicia o cronÃ´metro
  if (paginaAtual === 1) {
    atualizaTimer = setInterval(function () {
      // setInterval = executa algo repetidamente
      segundos++; // Adiciona 1 segundo
      criaTimer(); // Atualiza o formato do timer
    }, 1000); // Executa a cada 1000ms (1 segundo)
  }

  // Se estamos na página 6 (Ãºltima pergunta), para o cronÃ´metro
  if (paginaAtual === 6) {
    clearInterval(atualizaTimer); // Para o timer
  }
});

// ===== PARTE 9: SEGUNDO EVENT LISTENER DO BOTÃO (PRINCIPAL) =====
// Este é o "cérebro" do questionário - controla a navegação entre as páginas

botaoPrincipal.addEventListener("click", function (evento) {
  evento.preventDefault(); // Não recarrega a página

  paginaAtual++; // Avança para a próxima página (+1)

  // Se chegou na página 8, volta para o início (página 0)
  if (paginaAtual === 8) {
    paginaAtual = 0; // Reinicia o questionário
  }

  // VALIDAÃ‡ÃO: Verifica se o usuário digitou o nome antes de continuar
  if (!inputNome.value && paginaAtual === 2) {
    // Se não tem nome E está tentando ir para página 2
    paginaAtual = 1; // Volta para a página 1
    alert("Ops, informe o seu nome antes de continuar!"); // Mostra mensagem de erro
  }

  // ===== COLETANDO AS RESPOSTAS DE CADA PÁGINA =====
  // Quando o usuário clica "Continuar", salvamos a resposta da página atual

  if (paginaAtual === 3) {
    // Pergunta sobre consumo de carne - salva o valor da barra deslizante
    respostas[0] = Number(inputRange.value); // Number() converte texto em nÃºmero
  } else if (paginaAtual === 4) {
    // Pergunta sobre alimentos não processados - salva o valor da barra
    respostas[1] = Number(inputRange.value);
  } else if (paginaAtual === 5) {
    // Pergunta sobre quantas pessoas na casa - salva o nÃºmero digitado
    respostas[2] = Number(inputNumber.value);
  } else if (paginaAtual === 6) {
    // Pergunta sobre energia elétrica - verifica qual botão foi marcado
    if (inputRadioSim.checked) {
      // Se o botão "Sim" está marcado
      respostas[3] = 1; // Salva 1
    } else {
      // Se não (botão "Não" marcado)
      respostas[3] = 0; // Salva 0
    }
  } else if (paginaAtual === 7) {
    // Pergunta sobre viagens de avião - salva o valor da barra
    respostas[4] = Number(inputRange.value);
  }

  seletorPagina(); // Atualiza a tela para mostrar a próxima pergunta
});

// ===== PARTE 10: ESCUTANDO MUDANÃ‡AS NO CAMPO DO NOME =====
// Quando o usuário digita o nome, salva na variável 'nome'
inputNome.addEventListener("change", function () {
  nome = inputNome.value; // Pega o que foi digitado e guarda na variável
});

// ===== PARTE 11: CONFIGURAÃ‡ÃO INICIAL DA BARRA DESLIZANTE =====
labelRange.innerHTML = inputRange.value + "%"; // Mostra o valor inicial da barra (50%)

// ===== PARTE 12: ESCUTANDO MUDANÃ‡AS NA BARRA DESLIZANTE =====
// Quando o usuário move a barra, atualiza o texto que mostra a porcentagem
inputRange.addEventListener("input", function () {
  labelRange.innerHTML = `${inputRange.value}%`; // Template literal para mostrar o valor + %
});

// ===== PARTE 13: FUNÃ‡ÃO PRINCIPAL - CONTROLA QUAL TELA MOSTRAR =====
// Esta é a função mais importante! Ela decide o que aparece na tela baseado na página atual

function seletorPagina() {
  // ===== PÁGINA 0: TELA INICIAL =====
  if (paginaAtual === 0) {
    resultadoFinal = 0; // Zera o resultado (para quando reinicia)
    enunciadoPrincipal.innerHTML = `Olá! Vamos calcular sua pegada ecológica? `; // Mensagem de boas-vindas
    botaoPrincipal.innerHTML = "Iniciar"; // Texto do botão

    // ===== PÁGINA 1: PERGUNTA DO NOME =====
  } else if (paginaAtual === 1) {
    enunciadoPrincipal.innerHTML = ""; // Limpa o conteÃºdo anterior
    enunciadoPrincipal.appendChild(inputNome); // Adiciona o campo de texto na tela
    inputNome.value = ""; // Limpa o campo (se tiver algo digitado)
    inputNome.classList.add("input-text"); // Aplica o estilo CSS
    inputNome.setAttribute("placeholder", "Digite o seu nome:"); // Texto de ajuda no campo
    botaoPrincipal.innerHTML = "Continuar"; // Muda o texto do botão

    // ===== PÁGINA 2: PERGUNTA SOBRE CONSUMO DE CARNE =====
  } else if (paginaAtual === 2) {
    enunciadoPrincipal.innerHTML = `${nome}, com que frequência você consome produtos de origem animal?`; // Pergunta personalizada com o nome
    inputRange.value = "50"; // Define a barra no meio (50%)
    labelRange.innerHTML = "50%"; // Mostra 50% no texto
    enunciadoPrincipal.appendChild(inputRange); // Adiciona a barra na tela
    enunciadoPrincipal.appendChild(labelRange); // Adiciona o texto da porcentagem
    botaoPrincipal.innerHTML = "Continuar";

    // ===== PÁGINA 3: PERGUNTA SOBRE ALIMENTOS NÃO PROCESSADOS =====
  } else if (paginaAtual === 3) {
    inputRange.value = "50"; // Reseta a barra para 50%
    labelRange.innerHTML = "50%";
    enunciadoPrincipal.innerHTML = `${nome}, dos alimentos que consome, qual a percentagem de comida não processada, não embalada ou cultivada localmente?`;
    enunciadoPrincipal.appendChild(inputRange); // Reutiliza a mesma barra deslizante
    enunciadoPrincipal.appendChild(labelRange);
    botaoPrincipal.innerHTML = "Continuar";

    // ===== PÁGINA 4: PERGUNTA SOBRE QUANTAS PESSOAS NA CASA =====
  } else if (paginaAtual === 4) {
    enunciadoPrincipal.innerHTML = `${nome}, quantas pessoas residem no teu agregado familiar?`;
    enunciadoPrincipal.appendChild(inputNumber); // Adiciona o campo numérico
    inputNumber.value = 1; // Valor padrão: 1 pessoa
    inputNumber.classList.add("input-number"); // Aplica estilo CSS
    botaoPrincipal.innerHTML = "Continuar";

    // ===== PÁGINA 5: PERGUNTA SOBRE ENERGIA ELÉTRICA =====
  } else if (paginaAtual === 5) {
    enunciadoPrincipal.innerHTML = `${nome}, você tem energia elétrica em casa?`;

    // Montando a estrutura dos botões de rádio (Sim/Não)
    enunciadoPrincipal.appendChild(inputBox); // Caixa principal
    inputBox.appendChild(divRadio1); // Div do "Não"
    inputBox.appendChild(divRadio2); // Div do "Sim"
    divRadio1.appendChild(inputRadioNao); // Botão "Não"
    divRadio2.appendChild(inputRadioSim); // Botão "Sim"
    divRadio1.appendChild(labelRadioNao); // Texto "Não"
    divRadio2.appendChild(labelRadioSim); // Texto "Sim"
    divRadio1.classList.add("radio"); // Estilo CSS para "Não"
    divRadio2.classList.add("radio"); // Estilo CSS para "Sim"
    botaoPrincipal.innerHTML = "Continuar";

    // ===== PÁGINA 6: PERGUNTA SOBRE VIAGENS DE AVIÃO =====
  } else if (paginaAtual === 6) {
    enunciadoPrincipal.innerHTML = `${nome}, com que frequência viaja de avião anualmente?`;
    inputRange.value = "50"; // Reseta a barra para 50%
    labelRange.innerHTML = "50%";
    enunciadoPrincipal.appendChild(inputRange); // Reutiliza a barra deslizante
    enunciadoPrincipal.appendChild(labelRange);
    botaoPrincipal.innerHTML = "Continuar";

    // ===== PÁGINA 7: TELA DE RESULTADO =====
  } else if (paginaAtual === 7) {
    calculaResultado(); // Chama a função que faz os cálculos

    // Montando a tela de resultado
    enunciadoPrincipal.innerHTML = `<p class="descricao-resultado">Aqui está sua pegada ecológica, ${nome}!</p>`;
    enunciadoPrincipal.appendChild(divResultado); // Adiciona a div do resultado
    divResultado.appendChild(imgResultado); // Adiciona a imagem dos planetas
    divResultado.appendChild(textoResultado); // Adiciona o texto com o nÃºmero
    textoResultado.innerHTML = `${qtdPlanetas} planetas.`; // Mostra quantos planetas

    // Adiciona textos explicativos
    enunciadoPrincipal.innerHTML += `<p class="descricao-resultado">Como seria se todos no mundo vivessem como você?</p>`;
    enunciadoPrincipal.innerHTML += `<p class="descricao-resultado">Você demorou ${adicionaZeroTempo(
      timer.getMinutes() // Pega os minutos do timer
    )}:${adicionaZeroTempo(
      timer.getSeconds() // Pega os segundos do timer
    )}s para responder esse questionário.</p>`;

    botaoPrincipal.innerHTML = "Refazer"; // Botão para recomeçar
    enunciadoPrincipal.style.width = "100%"; // Ajusta a largura
    botaoPrincipal.style.marginBottom = "20px"; // Adiciona espaço embaixo do botão
  }
}

// ===== PARTE 14: FUNÃ‡ÃO QUE CALCULA O RESULTADO =====
// Esta função pega todas as respostas e calcula quantos planetas seriam necessários

function calculaResultado() {
  // ===== CÁLCULO 1: CONSUMO DE CARNE =====
  // Divide a resposta por 20, arredonda para baixo e multiplica por 5
  // Quanto mais carne, mais pontos (pior para o meio ambiente)
  pontos[0] = Math.floor(respostas[0] / 20) * 5;

  // ===== CÁLCULO 2: ALIMENTOS NÃO PROCESSADOS =====
  let i = Math.floor(respostas[1] / 20); // Calcula em qual faixa está
  pontos[1] = (5 - i) * 5; // Inverte a lógica: mais alimentos naturais = menos pontos

  // ===== CÁLCULO 3: QUANTAS PESSOAS NA CASA =====
  // Menos pessoas = mais pontos (cada pessoa usa mais recursos)
  if (respostas[2] <= 2) {
    // Até 2 pessoas
    pontos[2] = 5;
  } else if (respostas[2] <= 5) {
    // De 3 a 5 pessoas
    pontos[2] = 10;
  } else {
    // Mais de 5 pessoas
    pontos[2] = 20;
  }

  // ===== CÁLCULO 4: ENERGIA ELÉTRICA =====
  // Se tem energia (resposta = 1), ganha 20 pontos. Se não tem (0), ganha 0 pontos
  pontos[3] = respostas[3] * 20;

  // ===== CÁLCULO 5: VIAGENS DE AVIÃO =====
  // Mesmo cálculo da carne: mais viagens = mais pontos
  pontos[4] = Math.floor(respostas[4] / 20) * 5;

  // ===== SOMA TOTAL DOS PONTOS =====
  // Loop que percorre todos os pontos e soma no resultado final
  for (let i = 0; i < 5; i++) {
    resultadoFinal += pontos[i]; // += significa: pega o valor atual e soma mais este
  }

  // ===== CONVERSÃO EM PLANETAS =====
  // Divide o total por 20 e arredonda para baixo para saber quantos planetas
  qtdPlanetas = Math.floor(resultadoFinal / 20);
}

// ===== PARTE 15: FUNÃ‡ÃO AUXILIAR PARA FORMATAR O TEMPO =====
// Esta função garante que nÃºmeros menores que 10 apareçam com zero na frente (ex: 05, 09)

function adicionaZeroTempo(numero) {
  if (numero < 10) {
    // Se o nÃºmero é menor que 10
    return `0${numero}`; // Adiciona um zero na frente
  } else {
    // Se não
    return numero; // Retorna o nÃºmero normal
  }
}

// ===== FIM DO CÃ“DIGO =====
// O questionário funciona em um ciclo:
// 1. Usuário clica no botão
// 2. A resposta é salva no array 'respostas'
// 3. A página avança (paginaAtual++)
// 4. seletorPagina() mostra a nova tela
// 5. Processo se repete até chegar no resultado
