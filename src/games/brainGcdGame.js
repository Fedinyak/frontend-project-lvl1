import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gameRounds = 3;
const maxRandomNumber = 100;
const minRandomNumber = 1;

const getQuestion = (firstNum, secondNum) => `${firstNum} ${secondNum}`;

const getGCD = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return getGCD(secondNum, firstNum % secondNum);
};

const getQuestionsAndCommonDivisor = () => {
  const result = [];
  for (let i = 0; i < gameRounds; i += 1) {
    const firstNum = getRandomNumber(minRandomNumber, maxRandomNumber);
    const secondNum = getRandomNumber(minRandomNumber, maxRandomNumber);
    const roundResult = [getQuestion(firstNum, secondNum), getGCD(firstNum, secondNum)];
    result.push(roundResult);
  }
  return result;
};

const brainGcdGame = () => gameEngine(rules, getQuestionsAndCommonDivisor(maxRandomNumber));
export default brainGcdGame;
