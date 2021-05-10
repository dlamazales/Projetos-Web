'use strict';

// Scores and Current Scores
let score = document.getElementById('score--0');
let current = document.getElementById('current--0');

//Btns
let btn__new = document.querySelector('.btn--new');
let btn__roll = document.querySelector('.btn--roll');
let btn__hold = document.querySelector('.btn--hold');

//Img
let img__dice = document.querySelector('.dice');

//Players
let p0 = document.querySelector('.player--0');
let p1 = document.querySelector('.player--1');

function rollDice() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  return dice;
}

function currentPlayer() {
  if (p0.classList.contains('player--active')) {
    score = document.getElementById('score--0');
    current = document.getElementById('current--0');
    return 0;
  } else {
    score = document.getElementById('score--1');
    current = document.getElementById('current--1');
    return 1;
  }
}

function changePlayer(player) {
  if (player === 0) {
    score = document.getElementById('score--1');
    current = document.getElementById('current--1');
    p1.classList.add('player--active');
    p0.classList.remove('player--active');
  } else {
    score = document.getElementById('score--0');
    current = document.getElementById('current--0');
    p0.classList.add('player--active');
    p1.classList.remove('player--active');
  }
}

function checkWinner(player) {
  console.log(document.querySelector(`.player--${player}`));
  if (Number(current.textContent) >= 100) {
    document
      .querySelector(`.player--${player}`)
      .classList.add('player--winner');
  }
}

btn__roll.addEventListener('click', function () {
  const dice = rollDice();
  const player = currentPlayer();

  img__dice.src = `dice-${dice}.png`;
  if (dice === 1) {
    score.textContent = 0;
    changePlayer(currentPlayer());
  } else {
    score.textContent = Number(score.textContent) + dice;
  }
});

btn__hold.addEventListener('click', function () {
  current.textContent = Number(current.textContent) + Number(score.textContent);
  score.textContent = 0;
  checkWinner(currentPlayer());
  changePlayer(currentPlayer());
});
