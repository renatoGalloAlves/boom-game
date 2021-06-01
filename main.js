// [FEITO] capturar o elemento html em que vamos inserir os baloes
// [FEITO] adicionar o balão no container
// [FEITO] determinar um intervalo de tempo para adicionar os baloes sequencialmente

const buttonIniciarGame = document.querySelector(".botaoIniciar");

buttonIniciarGame.addEventListener("click", function () {
  buttonIniciarGame.remove();
  iniciarGame();
});

function iniciarGame() {
  setInterval(adicionarBalao, 1500);
}

const balloonsContainer = document.querySelector(".container-balao");

function adicionarBalao() {
  const elementImg = document.createElement("img");

  elementImg.setAttribute("src", "./assets/baloon.png");
  elementImg.setAttribute("class", "balao");

  const positionLeft = Math.round(Math.random() * 90);
  const positionTop = Math.round(Math.random() * 90);

  elementImg.style.left = positionLeft + "vw";
  elementImg.style.top = positionTop + "vh";

  elementImg.addEventListener("click", function () {
    removeBalao(this);
  });

  balloonsContainer.appendChild(elementImg);
}

function removeBalao(element) {
  const boomSound = new Audio("./assets/boom.mpeg");
  boomSound.play();
  boomSound.volume = 0.1;
  element.remove();
}