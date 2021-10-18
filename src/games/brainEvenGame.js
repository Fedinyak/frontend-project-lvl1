import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRandomNumber = 100;

const generateNumbers = (num) => {
  const numbers = [];
  for (let i = 0; i < 3; i += 1) {
    numbers.push(getRandomNumber(num));
  }
  return numbers;
};

const isNumberEven = (num) => {
  const result = [];
  result.push(num);
  if (num % 2 === 0) {
    result.push('yes');
  }
  result.push('no');
  return result;
};

const isNumberEvenArr = (num) => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(isNumberEven(num[i]));
  }
  return result;
};

const generateRandomNumbers = generateNumbers(maxRandomNumber);
const question = isNumberEvenArr(generateRandomNumbers);

const brainEvenGame = () => gameEngine(rules, question);

export default brainEvenGame;
