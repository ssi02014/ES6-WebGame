const input = document.querySelector("#input");
const form = document.querySelector("#form");
const logs = document.querySelector("#logs");

let answer = [];
let tries = [];

function init() {
  createAnswer();
}

function createAnswer() {
  while (answer.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (!answer.includes(number)) answer.push(number);
  }

  console.log(answer);
}

function checkInput(numbers) {
  if (numbers.length > 4) {
    return alert("입력 숫자가 길이 4를 초과하였습니다.");
  }

  if (new Set(numbers).size !== 4) {
    return alert("중복된 숫자를 입력하셨습니다.");
  }

  if (tries.includes(numbers.join(""))) return alert("이미 시도한 값입니다.");

  return true;
}

function findBallAndStrike(numbers) {
  let ball = 0;
  let strike = 0;

  numbers.forEach((number, i) => {
    if (answer.includes(number)) {
      ball++;

      if (answer.indexOf(number) === i) {
        ball--;
        strike++;
      }
    }
  });

  resultOutput(ball, strike);
}

function resultOutput(ball, strike) {
  if (strike === 4) {
    logs.innerHTML = `홈런입니다.`;

    resetGame();
  } else {
    logs.innerHTML = `볼은 ${ball}개이며 스트라이크는 ${strike}개 입니다. 시도 횟수는 ${
      tries.length + 1
    }회 입니다.`;
  }
}

function resetGame() {
  const resetButton = document.createElement("button");
  const resetText = document.createTextNode("재시작");
  resetButton.appendChild(resetText);
  logs.appendChild(resetButton);

  resetButton.addEventListener("click", () => {
    //게임 셋팅 초기화
    logs.innerHTML = "";
    input.value = "";
    tries = [];
    answer = [];

    createAnswer();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numbers = input.value.split("").map(Number);

  if (!checkInput(numbers)) return;

  if (tries.length < 10) {
    findBallAndStrike(numbers);
    tries.push(numbers.join(""));
  } else {
    logs.innerHTML = `패배! 정답은 ${answer.join("")}입니다.`;
    resetGame();
  }
});

init();
