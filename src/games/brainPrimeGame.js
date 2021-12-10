import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameRounds = 3;
const maxRandomNumber = 1000;
const minRandomNumber = 1;

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  const startDivisor = Math.round(num / 2);
  for (let i = startDivisor; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndExpectedAnswer = () => {
  const result = [];
  for (let i = 0; i < gameRounds; i += 1) {
    const number = getRandomNumber(minRandomNumber, maxRandomNumber);
    const expectedAnswer = isPrimeNumber(number) ? 'yes' : 'no';
    const roundResult = [number, expectedAnswer];
    result.push(roundResult);
  }
  return result;
};

const brainPrimeGame = () => gameEngine(rules, getQuestionAndExpectedAnswer());

export default brainPrimeGame;
