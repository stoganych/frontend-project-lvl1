import readlineSync from 'readline-sync';
import * as gameLogic from '../index.js';

const getTryAnswer = (num) => {
  if (num === 1) return 'yes';
  if (num === 2) return 'no';
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const playGame = () => {
  const userName = gameLogic.welcomeUser();
  gameLogic.sayHello(userName);
  gameLogic.getRulesOfGame('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i <= 2; i++) {
    const randomNum = gameLogic.getRandomInt(100);
    gameLogic.sayQuestion([randomNum]);
    const answer = readlineSync.question('Your answer: ');
    if (getTryAnswer(randomNum) === answer) console.log('Correct!');
    else {
      return gameLogic.getLoseMessage(answer, getTryAnswer(randomNum), userName);
    }
  }
  return gameLogic.congratulateOn(userName);
};

export default playGame;
