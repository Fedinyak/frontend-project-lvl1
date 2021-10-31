import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const maxRandomNumber = 100;
const minRandomNumber = 1;

const getQuestion = (firstNum, secondNum) => `${firstNum} ${secondNum}`;

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  let divisor = firstNum;
  if (firstNum > secondNum) {
    divisor = secondNum;
  }

  for (let j = divisor; j > 0; j -= 1) {
    if (firstNum % j === 0 && secondNum % j === 0) {
      return j;
    }
  }
  return divisor;
};

const getGreatestCommonDivisorArr = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const roundResult = [];
    const firstNum = getRandomNumber(minRandomNumber, maxRandomNumber);
    const secondNum = getRandomNumber(minRandomNumber, maxRandomNumber);
    roundResult.push(getQuestion(firstNum, secondNum));
    roundResult.push(getGreatestCommonDivisor(firstNum, secondNum));

    result.push(roundResult);
  }
  return result;
};

const questionAndDivisor = getGreatestCommonDivisorArr(maxRandomNumber);
const brainGcdGame = () => gameEngine(rules, questionAndDivisor);
export default brainGcdGame;
