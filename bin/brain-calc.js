#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = getUserName();
console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');
const countQuestion = 3;
const operators = ['+', '-', '*'];
const operatorCount = operators.length - 1;
const endRange = 25;

for (let i = 1; i <= countQuestion; i += 1) {
  const a = Math.floor(Math.random() * endRange);
  const b = Math.floor(Math.random() * endRange);

  const operatorNumber = Math.floor(Math.random() * operatorCount);
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

  console.log(`Question: ${a} ${operator} ${b}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }

  console.log('Correct!');
  if (i === countQuestion) {
    console.log(`Congratulations, ${userName}!`);
  }
}
