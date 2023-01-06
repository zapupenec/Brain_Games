import { greeting, game } from '../index.js';
import random from '../random.js';

const ruleEven = () => {
  const randomNumber = random(25);
  const question = randomNumber;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  game(userName, ruleEven());
};

export default brainEven;
