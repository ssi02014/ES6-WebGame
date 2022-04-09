const input = document.querySelector("#input");
const form = document.querySelector("#form");
const logs = document.querySelector("#logs");

let result = [];
let tries = [];
let isComplete = false;

init();

function init() {
  createResult();
}

function createResult() {
  while (result.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (!result.includes(number)) result.push(number);
  }

  console.log(result);
}

function onValidate(numbers) {
  if (isComplete) {
    alert("종료된 게임입니다.");
    return false;
  }
  if (numbers.length > 4) {
    alert("입력 숫자가 길이 4를 초과하였습니다.");
    return false;
  }
  if (new Set(numbers).size !== 4) {
    alert("중복된 숫자를 입력하셨습니다.");
    return false;
  }
  if (tries.includes(numbers.join(""))) {
    alert("이미 시도한 값입니다.");
    return false;
  }
  return true;
}

function renderOutput(ball, strike) {
  if (strike === 4) {
    logs.innerHTML = `홈런입니다.`;
    isComplete = true;
    resetGame();
  } else {
    logs.innerHTML = `볼은 ${ball}개이며 스트라이크는 ${strike}개 입니다. 시도 횟수는 ${
      tries.length + 1
    }회 입니다.`;
  }
}

function findBallAndStrike(numbers) {
  let ball = 0;
  let strike = 0;

  numbers.forEach((number, i) => {
    if (result.includes(number)) {
      ball++;

      if (result.indexOf(number) === i) {
        ball--;
        strike++;
      }
    }
  });

  renderOutput(ball, strike);
}

// Reset
function renderReset() {
  const resetButton = document.createElement("button");
  const resetText = document.createTextNode("재시작");
  resetButton.appendChild(resetText);
  logs.appendChild(resetButton);

  resetButton.addEventListener("click", resetGameData);
}

function resetGameData() {
  logs.innerHTML = "";
  input.value = "";
  tries = [];
  result = [];
  isComplete = false;

  createResult();
}

// Form Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numbers = input.value.split("").map(Number);

  if (!onValidate(numbers)) return;

  if (tries.length < 10) {
    findBallAndStrike(numbers);
    tries.push(numbers.join(""));
  } else {
    logs.innerHTML = `패배! 정답은 ${result.join("")}입니다.`;
    renderReset();
  }
});
