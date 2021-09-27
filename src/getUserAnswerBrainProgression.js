import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber.js';
import getProgression from './getProgression.js';
import getAnswer from './getAnswer.js';
import getQuestion from './getQuestion.js';

const getUserAnswerBrainGcd = (rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const maxStartNumber = 10;
    const maxGapProgression = 10;
    const maxLengthProgression = 6;
    const maxHiddenNumber = 9;

    const startNumber = getRandomNumber(maxStartNumber);
    const gapProgression = getRandomNumber(maxGapProgression);
    const lengthProgression = getRandomNumber(maxLengthProgression) + 5;
    const hiddenNumber = getRandomNumber(maxHiddenNumber);

    const progression = getProgression(startNumber, gapProgression, lengthProgression);

    const answer = getAnswer(hiddenNumber, progression);
    const question = getQuestion(hiddenNumber, progression);

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (answer.toString() === userAnswer) {
      console.log('Correct!');
    } else if (answer.toString() !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default getUserAnswerBrainGcd;
