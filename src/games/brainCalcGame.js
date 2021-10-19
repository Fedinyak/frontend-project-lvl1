import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';
const maxRandomNumber = 100;
const maxRandomOperation = 4;

const getQuestionAndCalc = (num, operations) => {
  const firstNum = getRandomNumber(num);
  const secondNum = getRandomNumber(num);
  const operation = getRandomNumber(operations);
  const result = [];
  if (operation === 1) {
    result.push(`${firstNum} + ${secondNum}`);
    result.push(firstNum + secondNum);
  } else if (operation === 2) {
    result.push(`${firstNum} - ${secondNum}`);
    result.push(firstNum - secondNum);
  } else if (operation === 3) {
    result.push(`${firstNum} * ${secondNum}`);
    result.push(firstNum * secondNum);
  }
  return result;
};

const getQuestionAndCalcArr = (num, operations) => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(getQuestionAndCalc(num, operations));
  }
  return result;
};

const question = getQuestionAndCalcArr(maxRandomNumber, maxRandomOperation);

const brainCalcGame = () => gameEngine(rules, question);

export default brainCalcGame;
