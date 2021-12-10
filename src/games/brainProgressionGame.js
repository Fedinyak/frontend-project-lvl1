import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'What number is missing in the progression?';
const maxStartNumber = 10;
const gameRounds = 3;
const maxGapProgression = 10;
const maxLengthProgression = 11;
const minRandomNumber = 1;
const minLengthProgression = 5;

const getProgression = (startNum, gap, lengthProg) => {
  const result = [];
  for (let i = 0; i < lengthProg; i += 1) {
    result.push(startNum + gap * i);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const startNum = getRandomNumber(minRandomNumber, maxStartNumber);
  const gap = getRandomNumber(minRandomNumber, maxGapProgression);
  const lengthProg = getRandomNumber(minLengthProgression, maxLengthProgression);
  const hiddenNumber = getRandomNumber(minRandomNumber, lengthProg);
  const progression = getProgression(startNum, gap, lengthProg);
  const answer = progression[hiddenNumber];
  const question = '..';
  progression[hiddenNumber] = question;
  const result = [];
  result.push(progression.join(' '));
  result.push(answer);
  return result;
};

const getQuestionsAndAnswers = () => {
  const result = [];
  for (let i = 0; i < gameRounds; i += 1) {
    result.push(getQuestionAndAnswer());
  }
  return result;
};

const brainProgressionGame = () => gameEngine(rules, getQuestionsAndAnswers());

export default brainProgressionGame;
