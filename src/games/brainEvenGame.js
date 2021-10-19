import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRandomNumber = 100;

const isNumberEven = (num) => {
  const number = getRandomNumber(num);
  const result = [];
  result.push(number);
  if (number % 2 === 0) {
    result.push('yes');
  }
  result.push('no');
  return result;
};

const isNumberEvenArr = (num) => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(isNumberEven(num));
  }
  return result;
};

const question = isNumberEvenArr(maxRandomNumber);

const brainEvenGame = () => gameEngine(rules, question);

export default brainEvenGame;
