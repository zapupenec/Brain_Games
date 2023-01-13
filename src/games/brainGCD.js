import playGame from '../index.js';
import random from '../random.js';

const getGCD = (a, b) => {
  if (a === 0 || b === 0) {
    throw new Error('None of the numbers must be 0!');
  }

  const min = Math.abs(a) < Math.abs(b) ? a : b;
  for (let i = Math.abs(min); i > 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }

  return 1;
};

const getRuleBrainGCD = () => {
  const a = random(1, 100);
  const b = random(1, 100);

  const question = `${a} ${b}`;
  const correctAnswer = String(getGCD(a, b));

  return [question, correctAnswer];
};

const runBrainGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  playGame(getRuleBrainGCD);
};

export default runBrainGCD;
