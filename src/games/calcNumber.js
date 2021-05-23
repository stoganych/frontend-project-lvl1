import readlineSync from 'readline-sync';
import * as gameLogic from '../index.js';

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[Math.floor(Math.random() * 3)];
};

const solveTheExpression = (oper1, oper2, operand) => {
  let result;
  switch (operand) {
    case '+':
      result = oper1 + oper2;
      break;
    case '-':
      result = oper1 - oper2;
      break;
    case '*':
      result = oper1 * oper2;
      break;
    default:
      console.log('no such operator');
  }
  return result;
};

const playGame = () => {
  const userName = gameLogic.welcomeUser();
  gameLogic.sayHello(userName);
  gameLogic.outputRules('What is the result of the expression?');
  for (let i = 0; i <= 2; i++) {
    const firstOperand = gameLogic.getRandomInt(100);
    const secondOperand = gameLogic.getRandomInt(100);
    const operator = getRandomOperator();
    gameLogic.sayQuestion([firstOperand, operator, secondOperand]);
    const expression = solveTheExpression(firstOperand, secondOperand, operator);
    const answer = +readlineSync.question('Your answer: ');
    if (expression === answer) console.log('Correct!');
    else {
      return gameLogic.getLoseMessage(answer, expression, userName);
    }
  }
  return gameLogic.congratulateOn(userName);
};

export default playGame;
