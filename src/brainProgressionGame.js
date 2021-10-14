import getRandomNumber from './getRandomNumber.js';
import gameEngine from './index.js';

const rules = 'What number is missing in the progression?';
const roundOfGames = 3;

const maxStartNumber = 10;
const maxGapProgression = 10;
const maxLengthProgression = 6;

const generateNumbers = (num, rounds) => {
  const numbers = [];
  for (let i = 0; i < rounds; i += 1) {
    numbers.push(getRandomNumber(num));
  }
  return numbers;
};

const generateLengthProgression = (num, rounds) => {
  const numbers = [];
  for (let i = 0; i < rounds; i += 1) {
    numbers.push(getRandomNumber(num) + 5);
  }
  return numbers;
};

const generateHiddenNumbers = (num, rounds) => {
  const numbers = [];
  for (let i = 0; i < rounds; i += 1) {
    numbers.push(getRandomNumber(num[i]));
  }
  return numbers;
};

const startNumber = generateNumbers(maxStartNumber, roundOfGames);
const gapProgression = generateNumbers(maxGapProgression, roundOfGames);
const lengthProgression = generateLengthProgression(maxLengthProgression, roundOfGames);
const hiddenNumber = generateHiddenNumbers(lengthProgression, roundOfGames);

const getProgression = (startNum, gap, lengthProg, rounds) => {
  const progressions = [];
  for (let i = 0; i < rounds; i += 1) {
    const result = [];
    let number = startNum[i];
    for (let j = 0; j < lengthProg[i]; j += 1) {
      result.push(number);
      number += gap[i];
    }
    progressions.push(result);
  }
  return progressions;
};

const progression = getProgression(startNumber, gapProgression, lengthProgression, roundOfGames);

const getAnswer = (num, prog, round) => {
  const result = [];
  for (let i = 0; i < round; i += 1) {
    result.push(prog[i][num[i]]);
  }
  return result;
};

const expectedAnswer = getAnswer(hiddenNumber, progression, roundOfGames);

const getQuestion = (num, prog, rounds) => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    const question = prog[i];
    question[num[i]] = '..';
    result.push(question.join(' '));
  }
  return result;
};

const question = getQuestion(hiddenNumber, progression, roundOfGames);

const brainProgressionGame = () => gameEngine(rules, question, expectedAnswer, roundOfGames);

export default brainProgressionGame;
