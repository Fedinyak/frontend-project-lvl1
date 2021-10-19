import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const maxRandomNumber = 100;

const getGreatestCommonDivisor = (num) => {
  const firstNum = getRandomNumber(num);
  const secondNum = getRandomNumber(num);
  const result = [];
  let divisor = firstNum;

  if (firstNum > secondNum) {
    divisor = secondNum;
  }

  for (let j = divisor; j > 0; j -= 1) {
    if (firstNum % j === 0 && secondNum % j === 0) {
      result.push(`${firstNum} ${secondNum}`);
      result.push(j);
    }
  }

  return result;
};

const getGreatestCommonDivisorArr = (num) => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(getGreatestCommonDivisor(num));
  }
  return result;
};

const question = getGreatestCommonDivisorArr(maxRandomNumber);
const brainGcdGame = () => gameEngine(rules, question);

export default brainGcdGame;
