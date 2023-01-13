import playGame from '../index.js';
import random from '../random.js';

const generateProgression = (start, lenght, step) => {
  const progression = [start];

  for (let i = 0; i < lenght - 1; i += 1) {
    const nextItem = progression[i] + step;
    progression.push(nextItem);
  }

  return progression;
};

const hideItemOfProgression = (progression) => {
  const result = [...progression];
  const numHiddenItem = random(0, progression.length - 1);

  const hiddenItem = progression[numHiddenItem];
  result[numHiddenItem] = '..';

  return [result, hiddenItem];
};

const getRuleBrainProgression = () => {
  const firstItem = random(1, 20);
  const lenghtProgression = random(5, 10);

  const increment = random(1, 5);
  const progression = generateProgression(firstItem, lenghtProgression, increment);

  const [progressionForQuest, hiddenItem] = hideItemOfProgression(progression);
  const question = progressionForQuest.join(' ');

  const correctAnswer = String(hiddenItem);
  return [question, correctAnswer];
};

const runBrainProgression = () => {
  console.log('What number is missing in the progression?');
  playGame(getRuleBrainProgression);
};

export default runBrainProgression;
