import getRandomNumber from './getRandomNumber.js';
import gameEngine from './index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const maxRandomNumber = 100;
const roundOfGames = 3;

const generateNumbers = (num, rounds) => {
  const numbers = [];
  const arrLength = rounds * 2;
  for (let i = 0; i < arrLength; i += 1) {
    numbers.push(getRandomNumber(num));
  }
  return numbers;
};

const numbersArr = generateNumbers(maxRandomNumber, roundOfGames);

const generateQuestions = (numbers, rounds) => {
  const questions = [];
  const arrLength = rounds * 2;
  for (let i = 0; i < arrLength; i += 2) {
    questions.push(`${numbers[i]} ${numbers[i + 1]}`);
  }
  return questions;
};

const question = generateQuestions(numbersArr, roundOfGames);

const getGreatestCommonDivisor = (numbers, rounds) => {
  let divisor;
  const arrLength = rounds * 2;
  const GreatestCommonDivisor = [];
  for (let i = 0; i < arrLength; i += 2) {
    if (numbers[i] < numbers[i + 1]) {
      divisor = numbers[i];
    } else {
      divisor = numbers[i + 1];
    }
    for (let j = divisor; j > 0; j -= 1) {
      if (numbers[i] % j === 0 && numbers[i + 1] % j === 0) {
        GreatestCommonDivisor.push(j);
      }
    }
  }
  return GreatestCommonDivisor;
};

const expectedAnswer = getGreatestCommonDivisor(numbersArr, roundOfGames);
const brainGcdGame = () => gameEngine(rules, question, expectedAnswer, roundOfGames);

export default brainGcdGame;
