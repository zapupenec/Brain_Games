import game from '../index.js';
import random from '../random.js';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return String(a + b);
    case '-':
      return String(a - b);
    case '*':
      return String(a * b);
    default:
      break;
  }
  return NaN;
};

const ruleCalc = () => {
  const a = random(1, 10);
  const b = random(1, 10);

  const operatorNumber = random(0, operators.length - 1);
  const operator = operators[operatorNumber];

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = calculate(a, b, operator);

  return [question, correctAnswer];
};

const brainCalc = () => {
  console.log('What is the result of the expression?');
  game(ruleCalc);
};

export default brainCalc;
