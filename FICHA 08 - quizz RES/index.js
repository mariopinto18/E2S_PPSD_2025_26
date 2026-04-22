import quizData from "./data.js";

// parametriza o nível em que arranca o quizz e o nº de perguntas por nível
let nivel = 1
const numPerguntas = 6

//
let perguntasSelecionadas = []; // vai conter as perguntas sorteadas
let indiceAtual = 0;
let pontuacao = 0;


// Clicar no button Iniciar 
document.getElementById("iniciar").addEventListener("click", () => {
    document.getElementById("iniciar").hidden = true;  // esconde o button iniciar 
    document.getElementById("next").hidden = false;    // mostra o button Próxima questão
    
    // seleciona perguntas do array de objetos
    perguntasSelecionadas = sortearPerguntas();
    
    renderizarPergunta();     // renredizar a pergunta no card
    // quando clicar no button Próxima
    document.getElementById("next").addEventListener("click", proximaPergunta);


});


// seleciona perguntas (numPerguntas:6), do nível "facil"
function sortearPerguntas() {

    const quizz = quizData.filter(q => q.nivel === "facil");
    let totalPerguntas = quizz.length; // fico a saber quantas perguntam existem no nivel fácil

    let perguntas = []  // vai conter as perguntas sorteadas
    while (perguntas.length < 6) {
      let numero = Math.floor(Math.random()*quizz.length);   // gerar um nº aleatório de entre as perguntas
      let ID = quizz[numero].id

      if (perguntas.some(element => element.id == ID) == false) {
        console.log(numero)
          perguntas.push(quizz[numero])
      }
    }
    return perguntas
    
}



// Renderiar pergunta no quizz HTML
function renderizarPergunta() {
  const pergunta = perguntasSelecionadas[indiceAtual];

  document.getElementById("progresso").innerHTML = `Pergunta ${indiceAtual + 1} de ${perguntasSelecionadas.length}`;
  document.getElementById("pergunta").innerHTML = pergunta.pergunta;

  // obter do DOM o elemento opcoes
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  // para as 4 opções da pergunta delecionada
  pergunta.opcoes.forEach((opcao, index) => {
        opcoesDiv.innerHTML+= `<button id = ${index} class="opcao">${opcao}</button>`;
        console.log(`${opcao}`)
  });
  
  const btns = document.getElementsByClassName("opcao");
  for (const btn of btns) {
      btn.addEventListener("click", () => {
             bloquearOpcoes();
             console.log(btn.id, pergunta.respostaCorreta)
             if (btn.id  == pergunta.respostaCorreta) {
                btn.classList.add("correta");
                pontuacao++;
            } else {
                btn.classList.add("errada");
            }
      });
    }
    document.getElementById("next").disabled = false;

   
}

function bloquearOpcoes() {
  document.querySelectorAll(".opcao").forEach(btn => {
    btn.disabled = true;
  });
}

function proximaPergunta() {
   indiceAtual++;
   if (indiceAtual < perguntasSelecionadas.length) {
      renderizarPergunta();
  } else {
      mostrarResultadoFinal();
  }
}


function mostrarResultadoFinal() {
   document.querySelector(".card").innerHTML = `
      <h2>Resultado final</h2>
      <p>Pontuação: ${pontuacao} / ${perguntasSelecionadas.length}</p>
     `;
}

