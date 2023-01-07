import { greeting, game } from '../index.js';
import random from '../random.js';

const operators = ['+', '-', '*'];

const ruleCalc = () => {
  const a = random(1, 10);
  const b = random(1, 10);

  const operatorNumber = random(0, operators.length - 1);
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
  game(userName, ruleCalc);
};

export default brainCalc;
