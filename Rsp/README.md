# 💻 가위바위보
### 🏃‍♂️ 문제 개요
- 컴퓨터와 가위바위보를 해서 몇 번 이겼는지 점수를 기록한다.
- setInterval()메서드로 컴퓨터가 선택 할 가위바위보를 0.05초마다 바꿔준다.
- 3판 2선승제를 구현한다.

<br />

## 👨🏻‍💻 기능 구현
### 🏃‍♂️ DOM 및 변수 선언
```js
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
```

<br />

### 🏃‍♂️ changeComputerHand
```js
  let intervalId = setInterval(changeComputerHand, 50);

  function changeComputerHand() {
    if (computerChoice === "rock") computerChoice = "paper";
    else if (computerChoice === "scissors") computerChoice = "rock";
    else computerChoice = "scissors";

    computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
    computer.style.backgroundSize = "auto 200px";
  }
```

<br />

### 🏃‍♂️ clickButton
- diff의 값이 2, -1이면 승리이고, -2, 1이면 패배이다. 그외 값은 무승부이다.
```js
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
```

<br />

### 🏃‍♂️ restartGame
- 1초 후에 게임을 재시작
```js
  function restartGame() {
    setTimeout(() => {
      clickAble = true;
      intervalId = setInterval(changeComputerHand, 50);
    }, 1000);
  }
```

<br />