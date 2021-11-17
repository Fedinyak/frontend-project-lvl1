import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';
const maxRandomNumber = 100;
const operations = 4;
const minRandomNumber = 1;

const getSign = () => {
  const num = getRandomNumber(minRandomNumber, operations);
  let result;
  switch (num) {
    case 1:
      result = '+';
      break;

    case 2:
      result = '-';
      break;

    default:
      result = '*';
      break;
  }
  return result;
};

const getQuestion = (firstNum, secondNum, sign) => {
  const result = `${firstNum} ${sign} ${secondNum}`;
  return result;
};

const getCalc = (firstNum, secondNum, sign) => {
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
    const sign = getSign();
    roundResult.push(getQuestion(firstNum, secondNum, sign));
    roundResult.push(getCalc(firstNum, secondNum, sign));
    result.push(roundResult);
  }
  return result;
};

const brainCalcGame = () => gameEngine(rules, getQuestionsAndCalcs());

export default brainCalcGame;
