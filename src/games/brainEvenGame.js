import generateNumbers from '../generateNumbers.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundOfGames = 3;
const maxRandomNumber = 100;

const numbers = generateNumbers(maxRandomNumber, roundOfGames);
const question = numbers;

const isNumberEven = (num, rounds) => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    if (num[i] % 2 === 0) {
      result.push('yes');
    }
    result.push('no');
  }
  return result;
};

const expectedAnswer = isNumberEven(numbers, roundOfGames);

const brainEvenGame = () => gameEngine(rules, question, expectedAnswer, roundOfGames);

export default brainEvenGame;
