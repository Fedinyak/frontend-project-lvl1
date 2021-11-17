import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'What number is missing in the progression?';
const maxStartNumber = 10;
const maxGapProgression = 10;
const maxLengthProgression = 11;
const minRandomNumber = 1;
const minLengthProgression = 5;

const getProgression = (startNum, gap, lengthProg) => {
  const result = [];
  let number = startNum;
  for (let j = 0; j < lengthProg; j += 1) {
    result.push(number);
    number += gap;
  }
  return result;
};

const getQuestion = (startNum, gap, lengthProg, hiddenNumber) => {
  const progression = getProgression(startNum, gap, lengthProg);
  const answer = progression[hiddenNumber];
  const question = '..';
  progression[hiddenNumber] = question;
  const result = [];
  result.push(progression.join(' '));
  result.push(answer);
  return result;
};

const getQuestionAndAnswer = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const startNumber = getRandomNumber(minRandomNumber, maxStartNumber);
    const gapProgression = getRandomNumber(minRandomNumber, maxGapProgression);
    const lengthProgression = getRandomNumber(minLengthProgression, maxLengthProgression);
    const hiddenNumber = getRandomNumber(minRandomNumber, lengthProgression);
    result.push(getQuestion(startNumber, gapProgression, lengthProgression, hiddenNumber));
  }
  return result;
};

const brainProgressionGame = () => gameEngine(rules, getQuestionAndAnswer());

export default brainProgressionGame;
