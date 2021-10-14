import readlineSync from 'readline-sync';

const gameEngine = (rules, question, expectedAnswer, round) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < round; i += 1) {
    console.log(`Question: ${question[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer[i].toString() === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer[i]}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
