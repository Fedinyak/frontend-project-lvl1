import getRandomNumber from './getRandomNumber.js';
import gameEngine from './index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const roundOfGames = 3;
const maxRandomNumber = 1000;

const generateNumbers = (num, rounds) => {
  const numbers = [];
  for (let i = 0; i < rounds; i += 1) {
    numbers.push(getRandomNumber(num));
  }
  return numbers;
};

const numbers = generateNumbers(maxRandomNumber, roundOfGames);
const question = numbers;

const getPrimeNumber = (num) => {
  if (num < 2) {
    return 'no';
  }
  const startDivisor = Math.round(num / 2);
  for (let i = startDivisor; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateAnswer = (num, rounds) => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    result.push(getPrimeNumber(num[i]));
  }
  return result;
};

const expectedAnswer = generateAnswer(numbers, roundOfGames);
const brainPrimeGame = () => gameEngine(rules, question, expectedAnswer, roundOfGames);

export default brainPrimeGame;

// import readlineSync from 'readline-sync';
// import getRandomNumber from './getRandomNumber.js';
// import getPrimeNumber from './getPrimeNumber.js';

// const getUserAnswerBrainCalc = (rules) => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
//   console.log(rules);

//   for (let i = 0; i < 3; i += 1) {
//     const maxRandomNumber = 1000;
//     const randomNumber = getRandomNumber(maxRandomNumber);
//     const answer = getPrimeNumber(randomNumber);

//     console.log(`Question: ${randomNumber}`);
//     const userAnswer = readlineSync.question('Your answer: ');

//     if (answer === userAnswer) {
//       console.log('Correct!');
//     } else if (answer !== userAnswer) {
//       return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
//     }
//   }

//   return console.log(`Congratulations, ${userName}!`);
// };

// export default getUserAnswerBrainCalc;
