import generateNumbers from './generateNumbers.js';
import gameEngine from './index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const roundOfGames = 3;
const maxRandomNumber = 1000;

const numbers = generateNumbers(maxRandomNumber, roundOfGames);
const question = numbers;

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

const generateAnswer = (num, rounds) => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    result.push(getPrimeNumber(num[i]));
  }
  return result;
};

const expectedAnswer = generateAnswer(numbers, roundOfGames);
const brainPrimeGame = () => gameEngine(rules, question, expectedAnswer, roundOfGames);

export default brainPrimeGame;
