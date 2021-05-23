import readlineSync from 'readline-sync';
import * as gameLogic from '../index.js';

const createProgression = () => {
  const step = gameLogic.getRandomInt(5, 1);
  const lengthOfProgression = gameLogic.getRandomInt(15, 5);
  const startOfProgression = gameLogic.getRandomInt(100, 1);
  const progression = [startOfProgression];
  for (let i = 1; i < lengthOfProgression; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const setRandDotsInProgression = (progression) => {
  const clone = [...progression];
  clone[gameLogic.getRandomInt(progression.length - 1)] = '..';
  return clone;
};

const getTryAnswer = (progression, fake) => {
  let result;
  for (let i = 0; i < progression.length; i += 1) {
    if (progression[i] !== fake[i]) result = progression[i];
  }
  return result;
};

const playGame = () => {
  const userName = gameLogic.welcomeUser();
  gameLogic.sayHello(userName);
  gameLogic.getRulesOfGame('What number is missing in the progression?');
  for (let i = 0; i <= 2; i += 1) {
    const progression = createProgression();
    const fakeProgression = setRandDotsInProgression(progression);
    gameLogic.sayQuestion([fakeProgression.join(' ')]);
    const tryAnswer = getTryAnswer(progression, fakeProgression);
    const answer = +readlineSync.question('Your answer: ');
    if (tryAnswer === answer) console.log('Correct!');
    else {
      return gameLogic.getLoseMessage(answer, tryAnswer, userName);
    }
  }
  return gameLogic.congratulateOn(userName);
};

export default playGame;
