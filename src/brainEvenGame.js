import getRandomNumber from './getRandomNumber.js';
import gameEngine from './index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundOfGames = 3;
const maxRandomNumber = 100;

const generateNumbers = (num, rounds) => {
  const numbers = [];
  for (let i = 0; i < rounds; i += 1) {
    numbers.push(getRandomNumber(num));
  }
  return numbers;
};

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

// import readlineSync from 'readline-sync';
// import getRandomNumber from './getRandomNumber.js';
// import isNumberEven from './isNumberEven.js';

// const getUserAnswerBrainEven = (rules) => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
//   console.log(rules);

//   for (let i = 0; i < 3; i += 1) {
//     const maxRandomNumber = 100;

//     const number = getRandomNumber(maxRandomNumber);
//     console.log(`Question: ${number}`);
//     const userAnswer = readlineSync.question('Your answer: ');

//     if (isNumberEven(number) === userAnswer) {
//       console.log('Correct!');
//     } else if (isNumberEven(number) !== userAnswer) {
//       return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isNumberEven(number)}'.\nLet's try again, ${userName}!`);
//     }
//   }

//   return console.log(`Congratulations, ${userName}!`);
// };

// export default getUserAnswerBrainEven;
