import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'What number is missing in the progression?';
const maxStartNumber = 10;
const maxGapProgression = 10;
const maxLengthProgression = 6;

const getProgression = (startNum, gap, lengthProg) => {
  const startNumber = getRandomNumber(startNum);
  const gapProgression = getRandomNumber(gap);
  const lengthProgression = getRandomNumber(lengthProg) + 5;
  const result = [];
  let number = startNumber;
  for (let j = 0; j < lengthProgression; j += 1) {
    result.push(number);
    number += gapProgression;
  }
  return result;
};

const getQuestion = (startNum, gap, lengthProg) => {
  const progression = getProgression(startNum, gap, lengthProg);
  const hiddenNumber = getRandomNumber(progression.length);
  const result = [];
  const answer = progression[hiddenNumber];
  const question = '..';
  progression[hiddenNumber] = question;
  result.push(progression.join(' '));
  result.push(answer);
  return result;
};

const getQuestionArr = (startNum, gap, lengthProg) => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(getQuestion(startNum, gap, lengthProg));
  }
  return result;
};

const question = getQuestionArr(maxStartNumber, maxGapProgression, maxLengthProgression);
const brainProgressionGame = () => gameEngine(rules, question);

export default brainProgressionGame;
