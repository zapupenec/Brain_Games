import game from '../index.js';
import random from '../random.js';

const isPrime = (num) => {
  for (let i = num - 1; i >= 2; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const rulePrime = () => {
  const randomNumber = random(2, 10);
  const question = `${randomNumber}`;

  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  game(rulePrime);
};

export default brainPrime;
