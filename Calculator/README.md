# ๐ป Calculator

<br />

## ๐จ๐ปโ๐ป ๊ธฐ๋ฅ ๊ตฌํ
### ๐โโ๏ธ ์ซ์ ๋ฒํผ ํด๋ฆญ ์ด๋ฒคํธ
- ์ซ์ ์ํ์ ํด๋ฆญํ์ ๋ ์งํ๋๋ ๊ธฐ๋ฅ ๊ตฌํ
- operator๊ฐ ๋น์ด์์ผ๋ฉด ์ฒซ ๋ฒ์งธ ์ซ์์ ๊ฐ์ ๋ฃ๊ณ , operator๊ฐ ๋น์ด์์ง ์์ผ๋ฉด ๋ ๋ฒ์งธ ์ซ์์ ๊ฐ์ ๋ฃ๋๋ค.
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

### ๐โโ๏ธ ์ฐ์ฐ์ ๋ฒํผ ํด๋ฆญ ์ด๋ฒคํธ
- ์ฐ์ฐ์ ๋ฒํผ์ ํด๋ฆญํ์ ๋ ์งํ๋๋ ๊ธฐ๋ฅ ๊ตฌํ
- ์ฒซ๋ฒ์งธ ์ซ์์ ๊ฐ์ด ์์ ๊ฒฝ์ฐ `operator`์ `e.target.textContent`๋ฅผ ํ ๋นํ๋ค.
```js
  function onClickOperator(e) {
    e.preventDefault();

    if (numOne) {
      operator = e.target.textContent;
      operatorView.value = e.target.textContent;
    } else {
      alert("์ซ์๋ฅผ ๋จผ์  ์๋ ฅํด์ฃผ์ธ์.");
    }
  }
```

<br />

### ๐โโ๏ธ '=' ๋ฒํผ ํด๋ฆญ ์ด๋ฒคํธ
- `=` ๋ฒํผ ํด๋ฆญํ์ ๋ ์งํ๋๋ ๊ธฐ๋ฅ ๊ตฌํ
- ์ฐ์ฐ์์ ๊ฐ์ ๋ฐ๋ฅธ `switch๋ฌธ`์ ํตํ ๋ถ๊ธฐ
- ์ถ๊ฐ์ ์ผ๋ก ์ฐ๋ฌ์ ๊ณ์ฐ์ ํ๊ธฐ ์ํ ๊ธฐ๋ฅ์ ์ถ๊ฐํ๊ธฐ ์ํ ์์๋ ์ค์
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
      alert("์ซ์๋ฅผ ๋จผ์  ์๋ ฅํด์ฃผ์ธ์.");
    }
  }
```

<br />

### ๐โโ๏ธ 'C' ๋ฒํผ ํด๋ฆญ ์ด๋ฒคํธ
- `C` ๋ฒํผ ํด๋ฆญํ์ ๋ ์งํ๋๋ ๊ธฐ๋ฅ ๊ตฌํ
- ๋ชจ๋  ๋ณ์์ ๊ฐ์ `๋น ๋ฌธ์์ด`๋ก ํ ๋นํด์ผ ํ๋ค.
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