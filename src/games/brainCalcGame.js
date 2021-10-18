import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';
const maxRandomNumber = 100;
const maxRandomOperation = 4;

const generateRandomNumbers = (num, operation) => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const roundNumbers = [];
    roundNumbers.push(getRandomNumber(num));
    roundNumbers.push(getRandomNumber(num));
    roundNumbers.push(getRandomNumber(operation));
    result.push(roundNumbers);
  }
  return result;
};

const getQuestionAndCalc = (num) => {
  const result = [];
  const operation = num[2];
  if (operation === 1) {
    result.push(`${num[0]} + ${num[1]}`);
    result.push(num[0] + num[1]);
  } else if (operation === 2) {
    result.push(`${num[0]} - ${num[1]}`);
    result.push(num[0] - num[1]);
  } else if (operation === 3) {
    result.push(`${num[0]} * ${num[1]}`);
    result.push(num[0] * num[1]);
  }
  return result;
};

const getQuestionAndCalcArr = (num) => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(getQuestionAndCalc(num[i]));
  }
  return result;
};

const randomNumbers = generateRandomNumbers(maxRandomNumber, maxRandomOperation);
const question = getQuestionAndCalcArr(randomNumbers);

const brainCalcGame = () => gameEngine(rules, question);

export default brainCalcGame;
