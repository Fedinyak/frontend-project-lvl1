import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRandomNumber = 100;
const min = 1;

const isNumberEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getQuestionsAndCalcs = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const roundResult = [];
    const number = getRandomNumber(min, maxRandomNumber);
    roundResult.push(number);
    roundResult.push(isNumberEven(number));
    result.push(roundResult);
  }
  return result;
};

const questionAndCalc = getQuestionsAndCalcs();

const brainEvenGame = () => gameEngine(rules, questionAndCalc);

export default brainEvenGame;
