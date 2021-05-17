import readlineSync from 'readline-sync';


export const welcomeUser = () => {
   const userName = readlineSync.question('May I have your name? ');
   return console.log(`Hello, ${userName}!`);
};