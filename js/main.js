const buttons = document.querySelectorAll('.calc__button');
const display = document.querySelector('.calc__display');
const operators = ['+', '-', '*', '/'];
let equation = '';

for (const button of buttons) {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    equation += value;

    writeInDisplay(equation);
    operation(value);
  });
}

function operation(value) {
  switch (value) {
    case '#':
      reset();
      break;

    case '=':
      calculate(value);
      break;
  }
}

function getOperatorPos() {
  for (const operator of operators) {
    if (equation.indexOf(operator) !== -1) {
      const operatorPos = equation.indexOf(operator);

      return operatorPos;
    }
  }
}

function getSeparateValues() {
  const leftValue = Number(equation.substring(0, getOperatorPos()));
  const rightValue = Number(
    equation.substring(getOperatorPos() + 1, equation.length - 1)
  );
  const operator = equation.substring(getOperatorPos(), getOperatorPos() + 1);

  return {
    leftValue,
    operator,
    rightValue,
  };
}

function calculate() {
  const { leftValue, operator, rightValue } = getSeparateValues();
  let result = 0;

  switch (operator) {
    case '+':
      result = leftValue + rightValue;
      break;
    case '-':
      result = leftValue - rightValue;
      break;
    case '*':
      result = leftValue * rightValue;
      break;
    case '/':
      result = leftValue / rightValue;
      break;
  }

  writeInDisplay(result);
}

function writeInDisplay(content) {
  if (content == NaN) {
    content = 0;
  }
  equation = content;
  display.innerText = content;
}

function reset() {
  equation = '';

  // Reset display
  display.innerText = '0';
}
