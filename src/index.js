import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getRandomInt = () => Math.floor(Math.random() * 100);

export const congratulateOn = (user) => console.log(`Congratulations, ${user}!`);
