# π» Number BaseBall Game
### πββοΈ λ¬Έμ  κ°μ
- μλνΈμ΄ μ«μ 1 ~ 9 μ€μμ μ€λ³΅λμ§ μκ² λ΄ κ°λ₯Ό κ³ λ₯Έλ€. 10λ²μ κΈ°νκ° μ£Όμ΄μ§κ³  μλνΈμ΄ κ³ λ₯Έ μ«μ λ€ κ°λ₯Ό λ§νλ©΄ λλ κ²μμ΄λ€.
- μ΄λ μ«μλ§ λ§νλ κ²μ΄ μλλΌ μ«μμ μμκΉμ§ λ§νμΌ νλ€. κΈ°νκ° μ μ λμ , νλ¦΄ λλ§λ€ ννΈλ₯Ό μ€λ€. λ§ν μ«μμ κ°μλ₯Ό(λ³Ό), μ«μλΏλ§ μλλΌ μμκΉμ§ λ§ν κ°μ(μ€νΈλΌμ΄ν¬)λ₯Ό μλ €μ€λ€.
- μλ₯Ό λ€μ΄ μλνΈμ΄ 5728μ λ½μλ€ κ°μ νκ³  νλ μ΄μ΄κ° 7129λ₯Ό λ§νλ€λ©΄, μλλ 1μ€νΈλΌμ΄ν¬ 1λ³Όμ΄λΌκ³  λ§ν΄μ€λ€.
- λ§μ½ νλ μ΄μ΄κ° 5728μ λ§νλ€λ©΄ 4 μ€νΈλΌμ΄ν¬(νλ°)μ΄ λμ΄ κ²μμμ μ΄κΈ°κ² λλ€.
- κ·Έλ¦¬κ³  10λ²μ κΈ°ν μμ λ§νμ§ λͺ»νλ€λ©΄ μλνΈμ΄ μΉλ¦¬νκ² λλ€.

<br />

## π¨π»βπ» κΈ°λ₯ κ΅¬ν
### πββοΈ μ λ΅ μμ±
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

### πββοΈ μλ ₯κ° μ ν¨μ± κ²μ¬
```js
  function checkInput(numbers) {
    if (numbers.length > 4) {
      return alert("μλ ₯ μ«μκ° κΈΈμ΄ 4λ₯Ό μ΄κ³Όνμμ΅λλ€.");
    }

    if (new Set(numbers).size !== 4) {
      return alert("μ€λ³΅λ μ«μλ₯Ό μλ ₯νμ¨μ΅λλ€.");
    }

    if (tries.includes(numbers.join(""))) return alert("μ΄λ―Έ μλν κ°μλλ€.");

    return true;
  }
```
<br />

### πββοΈ λ³Ό, μ€νΈλΌμ΄ν¬ μ°ΎκΈ°
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

### πββοΈ κ²°κ³Όκ° μΆλ ₯
```js
  function resultOutput(ball, strike) {
    if (strike === 4) {
      logs.innerHTML = `νλ°μλλ€.`;

      resetGame();
    } else {
      logs.innerHTML = `λ³Όμ ${ball}κ°μ΄λ©° μ€νΈλΌμ΄ν¬λ ${strike}κ° μλλ€. μλ νμλ ${
        tries.length + 1
      }ν μλλ€.`;
    }
  }
```
<br />

### πββοΈ κ²μ λ¦¬μ(κ°μΈμ μΌλ‘ μΆκ°ν κΈ°λ₯)
```js
  function resetGame() {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("μ¬μμ");
    resetButton.appendChild(resetText);
    logs.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
      //κ²μ μν μ΄κΈ°ν
      logs.innerHTML = "";
      input.value = "";
      tries = [];
      answer = [];

      createAnswer();
    });
  }
```

<br />

### πββοΈ νΌ μ μ‘ μ΄λ²€νΈ λ¦¬μ€ν°
```js
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numbers = input.value.split("").map(Number);

    if (!checkInput(numbers)) return;

    if (tries.length < 10) {
      findBallAndStrike(numbers);
      tries.push(numbers.join(""));
    } else {
      logs.innerHTML = `ν¨λ°°! μ λ΅μ ${answer.join("")}μλλ€.`;
      resetGame();
    }
  });
```

<br />