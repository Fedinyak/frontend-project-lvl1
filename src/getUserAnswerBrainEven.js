import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber.js';
import isNumberEven from './isNumberEven.js';

const getUserAnswerBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isNumberEven(number) === userAnswer) {
      console.log('Correct!');
    } else if (isNumberEven(number) !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isNumberEven(number)}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default getUserAnswerBrainEven;
