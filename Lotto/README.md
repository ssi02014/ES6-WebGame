# ๐ป Lotto
### ๐โโ๏ธ ๋ฌธ์  ๊ฐ์
- ๋ก๋ ์ถ์ฒจ๊ธฐ๋ฅผ ๋ง๋ ๋ค. ์ซ์ ๋ณ๋ก ์๊น์ ๊ตฌ๋ถ ์ง์ด์ฃผ๊ณ , ํ๋ฉด์ ์ถ๋ ฅ ๋ ๋ 1์ด ๊ฐ๊ฒฉ์ผ๋ก ์ซ์๋ฅผ ํ๋ฉด์ ์ถ๋ ฅํ๋ค. ์ฆ, winBall์ 6๊ฐ๊ฐ 1์ด ๊ฐ๊ฒฉ์ผ๋ก ์ถ๋ ฅ๋๊ณ  7์ด ํ์ ๋งจ ๋ง์ง๋ง bonusBall์ด ์ถ๋ ฅ๋๊ฒ ํ๋ค.
- winBall์ ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌ ํ๋ค.

<br />

## ๐จ๐ปโ๐ป ๊ธฐ๋ฅ ๊ตฌํ
### ๐โโ๏ธ ๋ก๋ ๋ณผ ์์ฑ
- ๋ก๋ ๋ณผ์ ์์ฑํ๋ค. randomBalls์ random์ผ๋ก ์์ฑํ ์ซ์๊ฐ ์กด์ฌํ์ง ์์ผ๋ฉด pushํ๋ค.
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

### ๐โโ๏ธ winBall์ ํ๋ฉด์ ์ถ๋ ฅ
- setTimout ๋ฉ์๋๋ฅผ ์ฌ์ฉํด ๋น๋๊ธฐ์์ผ๋ก ๊ตฌํ
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

### ๐โโ๏ธ bonusBall์ ํ๋ฉด์ ์ถ๋ ฅ
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

### ๐โโ๏ธ ์ซ์ ๊ตฌ๊ฐ ๋ณ ๋ณผ ์์น ํ๊ธฐ
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