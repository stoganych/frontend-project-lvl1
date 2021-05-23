import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  if (userName === '') return 'Anonim';
  return userName;
};

export const sayHello = (userName) => console.log(`Hello, ${userName}!`);

export const getRulesOfGame = (text) => console.log(text);

export const sayQuestion = (arr) => console.log(`Question: ${arr.join(' ')}`);
// use array in param

export const getRandomInt = (num, limit = 0) => {
  if (limit) return Math.floor(Math.random() * (num - limit) + limit);
  return Math.floor(Math.random() * num);
};

export const getLoseMessage = (yourAnswer, tryAnswer, userName) => {
  console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${tryAnswer}'`);
  return console.log(`Let's try again, ${userName}!`);
};

export const congratulateOn = (user) => console.log(`Congratulations, ${user}!`);
