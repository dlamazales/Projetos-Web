'use strict';

/*
function highScore(score) {
  if (highScore < socre) {
    highScore = score;
  }
}

function check(rNumber, gNumber) {
  if (rNumber === gNumber) {
    console.log('Parabens você acertou');
  } else {
    return false;
  }
}

let score = 20;
let hscore = 0;
let rNumber = Math.trunc(Math.random() * 20);
console.log(rNumber);


document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = Math.trunc(Math.random() * 20);

document.querySelector('.score').textContent = 20 - 1;

document.querySelector('.guess').value = 5;
let gNumber = document.querySelector('.guess').value;
console.log(gNumber);

*/

let score = 20;
let hscore = 0;
let rNumber = Math.trunc(Math.random() * 20);
console.log(rNumber);

document.querySelector('.check').addEventListener('click', function () {
  let gNumber = Number(document.querySelector('.guess').value);
  if (gNumber === rNumber) {
    highScore(score);
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = rNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (hscore <= score) {
      hscore = score;
      document.querySelector('.highscore').textContent = hscore;
    }
  } else {
    if (gNumber > rNumber)
      document.querySelector('.message').textContent = 'Too High!';
    else document.querySelector('.message').textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  rNumber = Math.trunc(Math.random() * 20);
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});
