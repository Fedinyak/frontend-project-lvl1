import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const maxRandomNumber = 100;
const minRandomNumber = 1;

const getQuestion = (firstNum, secondNum) => `${firstNum} ${secondNum}`;

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return getGreatestCommonDivisor(secondNum, firstNum % secondNum);
};

const getQuestionsAndCommonDivisor = () => {
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

const brainGcdGame = () => gameEngine(rules, getQuestionsAndCommonDivisor(maxRandomNumber));
export default brainGcdGame;
