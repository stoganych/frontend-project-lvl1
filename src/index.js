import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const sayHello = (userName) => console.log(`Hello, ${userName}!`);

export const getRandomInt = () => Math.floor(Math.random() * 100);

export const getLoseMessage = (yourAnswer, tryAnswer, userName) => {
  console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${tryAnswer}'`);
  return console.log(`Let's try again, ${userName}`);
};

export const congratulateOn = (user) => console.log(`Congratulations, ${user}!`);
