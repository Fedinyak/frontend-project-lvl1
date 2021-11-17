import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxRandomNumber = 1000;
const minRandomNumber = 1;

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

const getQuestionAndExpectedAnswer = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const roundResult = [];
    const number = getRandomNumber(minRandomNumber, maxRandomNumber);
    roundResult.push(number);
    roundResult.push(getPrimeNumber(number));
    result.push(roundResult);
  }
  return result;
};

const brainPrimeGame = () => gameEngine(rules, getQuestionAndExpectedAnswer());

export default brainPrimeGame;
