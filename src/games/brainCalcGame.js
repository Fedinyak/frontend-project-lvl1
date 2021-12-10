import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';
const gameRounds = 3;
const maxRandomNumber = 100;
const minRandomNumber = 1;
const minRandomSignNumber = 0;
const maxRandomSignNumber = 2;
const signs = '+-*';

const getCalc = (firstNum, secondNum, signIndex) => {
  const sign = signs[signIndex];
  let result;
  switch (sign) {
    case '+':
      result = firstNum + secondNum;
      break;

    case '-':
      result = firstNum - secondNum;
      break;

    case '*':
      result = firstNum * secondNum;
      break;

    default:
      result = null;
      break;
  }
  return result;
};

const getQuestionsAndCalcs = () => {
  const result = [];
  for (let i = 0; i < gameRounds; i += 1) {
    const firstNum = getRandomNumber(minRandomNumber, maxRandomNumber);
    const secondNum = getRandomNumber(minRandomNumber, maxRandomNumber);
    const sign = getRandomNumber(minRandomSignNumber, maxRandomSignNumber);
    const roundResult = [`${firstNum} ${signs[sign]} ${secondNum}`, getCalc(firstNum, secondNum, sign)];
    result.push(roundResult);
  }
  return result;
};

const brainCalcGame = () => gameEngine(rules, getQuestionsAndCalcs());

export default brainCalcGame;
