import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';
const maxRandomNumber = 100;
const minRandomNumber = 1;
const minRandomSignNumber = 0;
const maxRandomSignNumber = 2;

const getQuestion = (firstNum, secondNum, signIndex) => {
  const signs = '+-*';
  const sign = signs[signIndex];
  const result = `${firstNum} ${sign} ${secondNum}`;
  return result;
};

const getCalc = (firstNum, secondNum, signIndex) => {
  const signs = '+-*';
  const sign = signs[signIndex];
  let result;
  switch (sign) {
    case '+':
      result = firstNum + secondNum;
      break;

    case '-':
      result = firstNum - secondNum;
      break;

    default:
      result = firstNum * secondNum;
      break;
  }
  return result;
};

const getQuestionsAndCalcs = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const roundResult = [];
    const firstNum = getRandomNumber(minRandomNumber, maxRandomNumber);
    const secondNum = getRandomNumber(minRandomNumber, maxRandomNumber);
    const sign = getRandomNumber(minRandomSignNumber, maxRandomSignNumber);
    roundResult.push(getQuestion(firstNum, secondNum, sign));
    roundResult.push(getCalc(firstNum, secondNum, sign));
    result.push(roundResult);
  }
  return result;
};

const brainCalcGame = () => gameEngine(rules, getQuestionsAndCalcs());

export default brainCalcGame;
