import readlineSync from 'readline-sync';
import * as gameLogic from '../index.js';

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[Math.floor(Math.random() * 3)];
};

const playGame = () => {
  const userName = gameLogic.welcomeUser();
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i <= 2; i++) {
    const firstOperand = gameLogic.getRandomInt();
    const secondOperand = gameLogic.getRandomInt();
    const operator = getRandomOperator();
    console.log(`Question: ${firstOperand} ${operator} ${secondOperand}`);
    const expression = eval(`${firstOperand} ${operator} ${secondOperand}`);
    const answer = +readlineSync.question('Your answer: ');
    if (expression === answer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expression}'`);
      return console.log(`Let's try again, ${userName}`);
    }
  }
  return gameLogic.congratulateOn(userName);
};

export default playGame;
