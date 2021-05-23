import readlineSync from 'readline-sync';
import * as gameLogic from '../index.js';

const getTGCD = (num1, num2) => {
  if (num2 > num1) return getTGCD(num2, num1);
  if (!num2) return num1;
  return getTGCD(num2, num1 % num2);
};

const playGame = () => {
  const userName = gameLogic.welcomeUser();
  gameLogic.sayHello(userName);
  gameLogic.outputRules('Find the greatest common divisor of given numbers.');
  for (let i = 0; i <= 2; i++) {
    const firstOperand = gameLogic.getRandomInt();
    const secondOperand = gameLogic.getRandomInt();
    gameLogic.sayQuestion([firstOperand, secondOperand]);
    const tryAnswer = getTGCD(firstOperand, secondOperand);
    const answer = +readlineSync.question('Your answer: ');
    if (tryAnswer === answer) console.log('Correct!');
    else {
      return gameLogic.getLoseMessage(answer, tryAnswer, userName);
    }
  }
  return gameLogic.congratulateOn(userName);
};

export default playGame;
