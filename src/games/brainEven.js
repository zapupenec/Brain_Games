import playGame from '../index.js';
import random from '../random.js';

const isEven = (num) => num % 2 === 0;

const getRuleBrainEven = () => {
  const randomNumber = random(1, 25);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const runBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  playGame(getRuleBrainEven);
};

export default runBrainEven;
