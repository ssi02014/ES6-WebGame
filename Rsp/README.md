# ๐ป ๊ฐ์๋ฐ์๋ณด
### ๐โโ๏ธ ๋ฌธ์  ๊ฐ์
- ์ปดํจํฐ์ ๊ฐ์๋ฐ์๋ณด๋ฅผ ํด์ ๋ช ๋ฒ ์ด๊ฒผ๋์ง ์ ์๋ฅผ ๊ธฐ๋กํ๋ค.
- setInterval()๋ฉ์๋๋ก ์ปดํจํฐ๊ฐ ์ ํ ํ  ๊ฐ์๋ฐ์๋ณด๋ฅผ 0.05์ด๋ง๋ค ๋ฐ๊ฟ์ค๋ค.
- 3ํ 2์ ์น์ ๋ฅผ ๊ตฌํํ๋ค.

<br />

## ๐จ๐ปโ๐ป ๊ธฐ๋ฅ ๊ตฌํ
### ๐โโ๏ธ DOM ๋ฐ ๋ณ์ ์ ์ธ
```js
  const computer = document.querySelector("#computer");
  const score = document.querySelector("#score");
  const rock = document.querySelector("#rock");
  const scissors = document.querySelector("#scissors");
  const paper = document.querySelector("#paper");

  const IMG_URL = "./rsp.png";
  const rspX = {
    scissors: "0", // ๊ฐ์
    rock: "-220px", // ๋ฐ์
    paper: "-440px", // ๋ณด
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

### ๐โโ๏ธ changeComputerHand
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

### ๐โโ๏ธ clickButton
- diff์ ๊ฐ์ด 2, -1์ด๋ฉด ์น๋ฆฌ์ด๊ณ , -2, 1์ด๋ฉด ํจ๋ฐฐ์ด๋ค. ๊ทธ์ธ ๊ฐ์ ๋ฌด์น๋ถ์ด๋ค.
```js
function clickButton(event) {
  if (clickAble) {
    const myChoice =
      event.target.textContent === "๋ฐ์"
        ? "rock"
        : event.target.textContent === "๊ฐ์"
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
      message = "์น๋ฆฌ";
    } else if (diff === -2 || diff === 1) {
      computerPoint += 1;
      message = "ํจ๋ฐฐ";
    } else {
      message = "๋ฌด์น๋ถ";
    }

    if (userPoint === 3) {
      score.textContent = `๋์ ์น๋ฆฌ ${userPoint}:${computerPoint}`;
    } else if (computerPoint === 3) {
      score.textContent = `์ปดํจํฐ์ ์น๋ฆฌ ${userPoint}:${computerPoint}`;
    } else {
      score.textContent = `${message} ์ ์ : ${userPoint}์ , ์ปดํจํฐ: ${computerPoint}์ `;
      restartGame();
    }
  }
}
```

<br />

### ๐โโ๏ธ restartGame
- 1์ด ํ์ ๊ฒ์์ ์ฌ์์
```js
  function restartGame() {
    setTimeout(() => {
      clickAble = true;
      intervalId = setInterval(changeComputerHand, 50);
    }, 1000);
  }
```

<br />