import { greeting, game } from '../index.js';
import random from '../random.js';

const ruleProgression = () => {
  const firstItem = random(1, 20);
  const progression = [firstItem];

  const lenghtProgression = random(5, 10);
  const Increment = random(1, 5);

  for (let i = 0; i < lenghtProgression - 1; i += 1) {
    const nextItem = progression[i] + Increment;
    progression.push(nextItem);
  }
  const numHiddenItem = random(0, progression.length - 1);
  const correctAnswer = String(progression[numHiddenItem]);

  progression[numHiddenItem] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const brainProgression = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  game(userName, ruleProgression);
};

export default brainProgression;
