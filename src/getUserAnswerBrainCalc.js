import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber.js';
import getCalcNumber from './getCalcNumber.js';
import getCalcOperation from './getCalcOperation.js';

const getUserAnswerBrainCalc = (rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const maxRandomNumber = 100;
    const maxRandomOperation = 3;

    const firstNum = getRandomNumber(maxRandomNumber);
    const secondNum = getRandomNumber(maxRandomNumber);
    const randomOperation = getRandomNumber(maxRandomOperation);
    const operation = getCalcOperation(randomOperation);
    const result = getCalcNumber(firstNum, randomOperation, secondNum);

    console.log(`Question: ${firstNum} ${operation} ${secondNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (result.toString() === userAnswer) {
      console.log('Correct!');
    } else if (result.toString() !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default getUserAnswerBrainCalc;
