# 💻 Lotto
### 🏃‍♂️ 문제 개요
- 로또 추첨기를 만든다. 숫자 별로 색깔을 구분 지어주고, 화면에 출력 될때 1초 간격으로 숫자를 화면에 출력한다. 즉, winBall의 6개가 1초 간격으로 출력되고 7초 후에 맨 마지막 bonusBall이 출력되게 한다.
- winBall은 오름차순으로 정렬 한다.

<br />

## 👨🏻‍💻 기능 구현
### 🏃‍♂️ 로또 볼 생성
- 로또 볼을 생성한다. randomBalls에 random으로 생성한 숫자가 존재하지 않으면 push한다.
```js
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
```

<br />

### 🏃‍♂️ winBall을 화면에 출력
- setTimout 메서드를 사용해 비동기식으로 구현
```js
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
```

<br />

### 🏃‍♂️ bonusBall을 화면에 출력
```js
  function drawBonusBall(bonusBall) {
    setTimeout(() => {
      const ball = document.createElement("div");
      ball.className = "ball";
      ball.textContent = bonusBall;

      coloring(bonusBall, ball);

      bonus.appendChild(ball);
    }, 7000);
  }
```

<br />

### 🏃‍♂️ 숫자 구간 별 볼 색칠하기
```js
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
```

<br />