import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber.js';
import getPrimeNumber from './getPrimeNumber.js';

const getUserAnswerBrainCalc = (rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const maxRandomNumber = 1000;
    const randomNumber = getRandomNumber(maxRandomNumber);
    const answer = getPrimeNumber(randomNumber);

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else if (answer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default getUserAnswerBrainCalc;
