#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = getUserName();
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const countQuestion = 3;
const endRange = 20;

for (let i = 1; i <= countQuestion; i += 1) {
  const randomNumber = Math.floor(Math.random() * endRange);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  if ((randomNumber % 2 === 0 && answer !== 'yes') || (randomNumber % 2 !== 0 && answer !== 'no')) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }

  console.log('Correct!');
  if (i === countQuestion) {
    console.log(`Congratulations, ${userName}!`);
  }
}
