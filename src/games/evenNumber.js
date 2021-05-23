import readlineSync from 'readline-sync';
import * as gameLogic from '../index.js';

const getTryAnswer = (num) => {
  if (num % 2 === 0) return 'yes';
  return 'no';
};

const playGame = () => {
  const userName = gameLogic.welcomeUser();
  gameLogic.sayHello(userName);
  gameLogic.getRulesOfGame('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
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
