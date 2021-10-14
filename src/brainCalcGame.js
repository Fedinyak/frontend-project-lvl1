import getRandomNumber from './getRandomNumber.js';
import gameEngine from './index.js';

const rules = 'What is the result of the expression?';
const maxRandomNumber = 100;
const maxRandomOperation = 4;
const roundOfGames = 3;

const generateNumbers = (num, rounds) => {
  const numbers = [];
  for (let i = 0; i < rounds; i += 1) {
    numbers.push(getRandomNumber(num));
  }
  return numbers;
};

const firstNumbers = generateNumbers(maxRandomNumber, roundOfGames);
const secondNumbers = generateNumbers(maxRandomNumber, roundOfGames);
const operationsNum = generateNumbers(maxRandomOperation, roundOfGames);

const getOperationSymbol = (num, rounds) => {
  const operation = [];
  for (let i = 0; i < rounds; i += 1) {
    if (num[i] === 1) {
      operation.push('+');
    } else if (num[i] === 2) {
      operation.push('-');
    } else if (num[i] === 3) {
      operation.push('*');
    }
  }
  return operation;
};

const operationsSymbol = getOperationSymbol(operationsNum, roundOfGames);

const generateQuestions = (firstNum, secondNum, operation, rounds) => {
  const questions = [];
  for (let i = 0; i < rounds; i += 1) {
    questions.push(`${firstNum[i]} ${operation[i]} ${secondNum[i]}`);
  }
  return questions;
};

const question = generateQuestions(firstNumbers, secondNumbers, operationsSymbol, roundOfGames);

const getCalcNumber = (firstNum, secondNum, operation, rounds) => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    if (operation[i] === '+') {
      result.push(firstNum[i] + secondNum[i]);
    } else if (operation[i] === '-') {
      result.push(firstNum[i] - secondNum[i]);
    } else if (operation[i] === '*') {
      result.push(firstNum[i] * secondNum[i]);
    }
  }
  return result;
};

const expectedAnswer = getCalcNumber(firstNumbers, secondNumbers, operationsSymbol, roundOfGames);
const brainCalcGame = () => gameEngine(rules, question, expectedAnswer, roundOfGames);

export default brainCalcGame;

// import readlineSync from 'readline-sync';
// import getRandomNumber from './getRandomNumber.js';
// import getCalcNumber from './getCalcNumber.js';
// import getCalcOperation from './getCalcOperation.js';

// const getUserAnswerBrainCalc = (rules) => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
//   console.log(rules);

//   for (let i = 0; i < 3; i += 1) {
//     const maxRandomNumber = 100;
//     const maxRandomOperation = 4;

//     const firstNum = getRandomNumber(maxRandomNumber);
//     const secondNum = getRandomNumber(maxRandomNumber);
//     const randomOperation = getRandomNumber(maxRandomOperation);
//     const operation = getCalcOperation(randomOperation);
//     const result = getCalcNumber(firstNum, randomOperation, secondNum);

//     console.log(`Question: ${firstNum} ${operation} ${secondNum}`);
//     const userAnswer = readlineSync.question('Your answer: ');

//     if (result.toString() === userAnswer) {
//       console.log('Correct!');
//     } else if (result.toString() !== userAnswer) {
//       return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
//     }
//   }

//   return console.log(`Congratulations, ${userName}!`);
// };

// export default getUserAnswerBrainCalc;
