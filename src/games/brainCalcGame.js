import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';
const maxRandomNumber = 100;
const operations = 4;
const minRandomNumber = 1;

const getQuestion = (firstNum, secondNum, operation) => {
  let result;
  switch (operation) {
    case 1:
      result = `${firstNum} + ${secondNum}`;
      break;

    case 2:
      result = `${firstNum} - ${secondNum}`;
      break;

    default:
      result = `${firstNum} * ${secondNum}`;
      break;
  }

  return result;
};

const getCalc = (firstNum, secondNum, operation) => {
  let result;
  switch (operation) {
    case 1:
      result = firstNum + secondNum;
      break;

    case 2:
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
    const operation = getRandomNumber(minRandomNumber, operations);
    roundResult.push(getQuestion(firstNum, secondNum, operation));
    roundResult.push(getCalc(firstNum, secondNum, operation));
    result.push(roundResult);
  }
  return result;
};

const questionAndCalc = getQuestionsAndCalcs();
const brainCalcGame = () => gameEngine(rules, questionAndCalc);

export default brainCalcGame;
