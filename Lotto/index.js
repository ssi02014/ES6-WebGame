const result = document.querySelector("#result");
const bonus = document.querySelector("#bonus");

function init() {
  const [winBalls, bonusBall] = createRandomBall();

  drawWinBall(winBalls);
  drawBonusBall(bonusBall);
}

function createRandomBall() {
  const randomBalls = [];

  while (randomBalls.length < 7) {
    const random = Math.floor(Math.random() * 45 + 1);

    if (!randomBalls.includes(random)) {
      randomBalls.push(random);
    }
  }
  const winBalls = randomBalls.slice(0, 6);
  const bonusBall = randomBalls[6];

  winBalls.sort((a, b) => a - b);

  return [winBalls, bonusBall];
}

function drawWinBall(winBalls) {
  winBalls.forEach((el, i) => {
    setTimeout(() => {
      const ball = document.createElement("div");
      ball.className = "ball";
      ball.textContent = el;

      coloring(el, ball);

      result.appendChild(ball);
    }, (i + 1) * 1000);
  });
}

function drawBonusBall(bonusBall) {
  setTimeout(() => {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.textContent = bonusBall;

    coloring(bonusBall, ball);

    bonus.appendChild(ball);
  }, 7000);
}

function coloring(number, ball) {
  if (number < 10) {
    ball.style.backgroundColor = "red";
  } else if (number < 20) {
    ball.style.backgroundColor = "yellow";
  } else if (number < 30) {
    ball.style.backgroundColor = "blue";
    ball.style.color = "white";
  } else if (number < 40) {
    ball.style.backgroundColor = "green";
  } else {
    ball.style.backgroundColor = "white";
  }
}

init();
