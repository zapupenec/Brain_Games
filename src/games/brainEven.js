import game from '../index.js';
import random from '../random.js';

const ruleEven = () => {
  const randomNumber = random(1, 25);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  game(ruleEven);
};

export default brainEven;
