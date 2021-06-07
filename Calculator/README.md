# 💻 Calculator

<br />

## 👨🏻‍💻 기능 구현
### 🏃‍♂️ 숫자 버튼 클릭 이벤트
- 숫자 자판을 클릭했을 때 진행되는 기능 구현
- operator가 비어있으면 첫 번째 숫자에 값을 넣고, operator가 비어있지 않으면 두 번째 숫자에 값을 넣는다.
```js
  function onClickNumber(e) {
    e.preventDefault();

    if (!operator) {
      numOne += e.target.textContent;
      resultView.value += e.target.textContent;
      return;
    }

    if (!numTwo) {
      resultView.value = "";
    }

    numTwo += e.target.textContent;
    resultView.value += e.target.textContent;
  }
```

<br />

### 🏃‍♂️ 연산자 버튼 클릭 이벤트
- 연산자 버튼을 클릭했을 때 진행되는 기능 구현
- 첫번째 숫자의 값이 있을 경우 `operator`에 `e.target.textContent`를 할당한다.
```js
  function onClickOperator(e) {
    e.preventDefault();

    if (numOne) {
      operator = e.target.textContent;
      operatorView.value = e.target.textContent;
    } else {
      alert("숫자를 먼저 입력해주세요.");
    }
  }
```

<br />

### 🏃‍♂️ '=' 버튼 클릭 이벤트
- `=` 버튼 클릭했을 때 진행되는 기능 구현
- 연산자의 값에 따른 `switch문`을 통한 분기
- 추가적으로 연달아 계산을 하기 위한 기능을 추가하기 위한 작업도 실시
```js
  function onClickCalculate(e) {
    e.preventDefault();

    const IntNumOne = parseInt(numOne);
    const IntNumTwo = parseInt(numTwo);

    if (numTwo) {
      switch (operator) {
        case "+":
          resultView.value = IntNumOne + IntNumTwo;
          break;
        case "-":
          resultView.value = IntNumOne - IntNumTwo;
          break;
        case "x":
          resultView.value = IntNumOne * IntNumTwo;
          break;
        case "/":
          resultView.value = IntNumOne / IntNumTwo;
          break;
        default:
          break;
      }
      numOne = resultView.value;
      numTwo = "";
      operatorView = "";
      operator = "";
    } else {
      alert("숫자를 먼저 입력해주세요.");
    }
  }
```

<br />

### 🏃‍♂️ 'C' 버튼 클릭 이벤트
- `C` 버튼 클릭했을 때 진행되는 기능 구현
- 모든 변수의 값을 `빈 문자열`로 할당해야 한다.
```js
  function onClickClear(e) {
    e.preventDefault();

    resultView.value = "";
    operatorView.value = "";
    numTwo = "";
    numOne = "";
    operator = "";
  }
```

<br />