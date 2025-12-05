'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');
let secretNumber;

const randomSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
};

randomSecretNumber();

again.addEventListener('click', () => {
  guess.value = 0;
  score.textContent = 20;
  randomSecretNumber();
  document.body.style.backgroundColor = 'black';
  console.log(secretNumber);
  again.style.backgroundColor = 'white';
  again.style.color = 'black';
});

checkBtn.addEventListener('click', () => {
  const currentguess = Number(guess.value);
  if (!currentguess) {
    throw new Error('No number submitted');
  }

  console.log(compareNumbers(currentguess, secretNumber));
});

function compareNumbers(userInput, secretNumber) {
  if (userInput === Number(secretNumber)) {
    number.textContent = userInput;
    message.textContent = `You guessed correctly! 🪄`;
    score.textContent = parseInt(score.textContent) + 1;
    highscore.textContent =
      parseInt(score.textContent) > parseInt(highscore.textContent)
        ? score.textContent
        : highscore.textContent;
    document.body.style.backgroundColor = 'green';
    return true;
  } else if (parseInt(score.textContent) > 0) {
    score.textContent = parseInt(score.textContent) - 1;
    return false;
  } else {
    message.textContent = `Try Again 💩`;
    again.style.backgroundColor = 'blue';
    again.style.color = 'white';
  }
}
