import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameRounds = 3;
const maxRandomNumber = 100;
const minRandomNumber = 1;

const isEven = (number) => number % 2 === 0;

const getQuestionsAndCalcs = () => {
  const result = [];
  for (let i = 0; i < gameRounds; i += 1) {
    const number = getRandomNumber(minRandomNumber, maxRandomNumber);
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
    const roundResult = [number, expectedAnswer];
    result.push(roundResult);
  }
  return result;
};

const brainEvenGame = () => gameEngine(rules, getQuestionsAndCalcs());

export default brainEvenGame;
