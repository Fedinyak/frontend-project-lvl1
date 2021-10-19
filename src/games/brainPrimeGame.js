import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxRandomNumber = 1000;

const getPrimeNumber = (num) => {
  if (num < 2) {
    return 'no';
  }
  const startDivisor = Math.round(num / 2);
  for (let i = startDivisor; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateAnswer = (num) => {
  const result = [];
  const number = getRandomNumber(num);
  for (let i = 0; i < 3; i += 1) {
    result.push(number);
    result.push(getPrimeNumber(number));
  }
  return result;
};

const generateAnswerArr = (num) => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generateAnswer(num));
  }
  return result;
};

const question = generateAnswerArr(maxRandomNumber);
const brainPrimeGame = () => gameEngine(rules, question);

export default brainPrimeGame;
