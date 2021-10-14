import getRandomNumber from './getRandomNumber.js';

const generateNumbers = (num, rounds) => {
  const numbers = [];
  for (let i = 0; i < rounds; i += 1) {
    numbers.push(getRandomNumber(num));
  }
  return numbers;
};

export default generateNumbers;
