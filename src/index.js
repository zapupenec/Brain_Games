import readlineSync from 'readline-sync';

const countRound = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const game = (userName, rule) => {
  for (let i = 1; i <= countRound; i += 1) {
    const [question, correctAnswer] = rule;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
    if (i === countRound) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export { greeting, game };
