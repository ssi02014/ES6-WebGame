const operatorView = document.querySelector("#operator");
const resultView = document.querySelector("#result");

let numOne = "";
let numTwo = "";
let operator = "";

document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

document.querySelector("#plus").addEventListener("click", onClickOperator);
document.querySelector("#minus").addEventListener("click", onClickOperator);
document.querySelector("#divide").addEventListener("click", onClickOperator);
document.querySelector("#multiply").addEventListener("click", onClickOperator);
document
  .querySelector("#calculate")
  .addEventListener("click", onClickCalculate);
document.querySelector("#clear").addEventListener("click", onClickClear);

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

function onClickOperator(e) {
  e.preventDefault();

  const op = e.target.textContent;

  if (numOne) {
    operator = op;
    operatorView.value = op;
  } else {
    alert("숫자를 먼저 입력해주세요.");
  }
}

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
    operatorView = "";
    numOne = resultView.value;
    operator = "";
    numTwo = "";
  } else {
    alert("숫자를 먼저 입력해주세요.");
  }
}

function onClickClear(e) {
  e.preventDefault();

  resultView.value = "";
  operatorView.value = "";
  numTwo = "";
  numOne = "";
  operator = "";
}
