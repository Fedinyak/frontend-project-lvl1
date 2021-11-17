import readlineSync from 'readline-sync';

const gameEngine = (rules, question) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [data, answer] = question[i];
    console.log(`Question: ${data}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer.toString() === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
