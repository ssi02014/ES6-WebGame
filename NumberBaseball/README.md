# 💻 Number BaseBall Game
### 🏃‍♂️ 문제 개요
- 상대편이 숫자 1 ~ 9 중에서 중복되지 않게 내 개를 고른다. 10번의 기회가 주어지고 상대편이 고른 숫자 네 개를 맞히면 되는 게임이다.
- 이때 숫자만 맞히는 것이 아니라 숫자의 순서까지 맞혀야 한다. 기회가 적은 대신, 틀릴 때마다 힌트를 준다. 맞힌 숫자의 개수를(볼), 숫자뿐만 아니라 순서까지 맞힌 개수(스트라이크)를 알려준다.
- 예를 들어 상대편이 5728을 뽑았다 가정하고 플레이어가 7129를 말한다면, 상대는 1스트라이크 1볼이라고 말해준다.
- 만약 플레이어가 5728을 말한다면 4 스트라이크(홈런)이 되어 게임에서 이기게 된다.
- 그리고 10번의 기회 안에 맞히지 못한다면 상대편이 승리하게 된다.

<br />

## 👨🏻‍💻 기능 구현
### 🏃‍♂️ 정답 생성
```js
  function createAnswer() {
    while (answer.length < 4) {
      const number = Math.floor(Math.random() * 10);

      if (!answer.includes(number)) answer.push(number);
    }

    console.log(answer);
  }
```

<br />

### 🏃‍♂️ 입력값 유효성 검사
```js
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
```
<br />

### 🏃‍♂️ 볼, 스트라이크 찾기
```js
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
```

<br />

### 🏃‍♂️ 결과값 출력
```js
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
```
<br />

### 🏃‍♂️ 게임 리셋(개인적으로 추가한 기능)
```js
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
```

<br />

### 🏃‍♂️ 폼 전송 이벤트 리스터
```js
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
```

<br />