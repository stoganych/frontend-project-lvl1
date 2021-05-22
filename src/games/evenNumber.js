import readlineSync from 'readline-sync';
import * as gameLogic from '../index.js';

const getTryAnswer = (num) => {
  if (num % 2 === 0) return 'yes';
  return 'no';
};

const playGame = () => {
  const userName = gameLogic.welcomeUser();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i++) {
    const randomNum = gameLogic.getRandomInt();
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (randomNum % 2 === 0 && answer === 'yes') console.log('Correct!');
    else if (randomNum % 2 !== 0 && answer === 'no') console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getTryAnswer(randomNum)}')`);
      return console.log(`Let's try again, ${userName}`);
    }
  }
  return gameLogic.congratulateOn(userName);
};

export default playGame;
