const computer = document.querySelector("#computer");
const score = document.querySelector("#score");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");

const IMG_URL = "./rsp.png";
const rspX = {
  scissors: "0", // 가위
  rock: "-220px", // 바위
  paper: "-440px", // 보
};
const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

let clickAble = true;
let computerChoice = "scissors";
let userPoint = 0;
let computerPoint = 0;

let intervalId = setInterval(changeComputerHand, 50);

rock.addEventListener("click", clickButton);
scissors.addEventListener("click", clickButton);
paper.addEventListener("click", clickButton);

function changeComputerHand() {
  if (computerChoice === "rock") computerChoice = "paper";
  else if (computerChoice === "scissors") computerChoice = "rock";
  else computerChoice = "scissors";

  computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  computer.style.backgroundSize = "auto 200px";
}

function clickButton(event) {
  if (clickAble) {
    const myChoice =
      event.target.textContent === "바위"
        ? "rock"
        : event.target.textContent === "가위"
        ? "scissors"
        : "paper";
    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;

    let message = "";

    clearInterval(intervalId);
    clickAble = false;

    if (diff === 2 || diff === -1) {
      userPoint += 1;
      message = "승리";
    } else if (diff === -2 || diff === 1) {
      computerPoint += 1;
      message = "패배";
    } else {
      message = "무승부";
    }

    if (userPoint === 3) {
      score.textContent = `나의 승리 ${userPoint}:${computerPoint}`;
    } else if (computerPoint === 3) {
      score.textContent = `컴퓨터의 승리 ${userPoint}:${computerPoint}`;
    } else {
      score.textContent = `${message} 유저: ${userPoint}점, 컴퓨터: ${computerPoint}점`;
      restartGame();
    }
  }
}

function restartGame() {
  setTimeout(() => {
    clickAble = true;
    intervalId = setInterval(changeComputerHand, 50);
  }, 1000);
}
