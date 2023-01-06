import { greeting, game } from '../index.js';
import random from '../random.js';

const operators = ['+', '-', '*'];
const operatorCount = operators.length - 1;

const ruleCalc = () => {
  const a = random(25);
  const b = random(25);
  const operatorNumber = random(operatorCount);
  const operator = operators[operatorNumber];

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = String(a + b);
      break;
    case '-':
      correctAnswer = String(a - b);
      break;
    case '*':
      correctAnswer = String(a * b);
      break;
    default:
      break;
  }
  const question = `${a} ${operator} ${b}`;
  return [question, correctAnswer];
};

const brainCalc = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');
  game(userName, ruleCalc());
};

export default brainCalc;
