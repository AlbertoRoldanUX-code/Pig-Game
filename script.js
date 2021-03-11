'use strict';

//Selecting elements:
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');

//Starting conditions:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality

btnRoll.addEventListener('click', function () {
  //Generate a random dice roll
  let randomDiceRoll = Math.trunc(Math.random() * 6 + 1);

  //Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomDiceRoll}.png`;

  //Check for rolled 1, if true, switch player
  if (randomDiceRoll !== 1) {
    //Add dice to current score
    currentScore += randomDiceRoll;
    currentScore0.textContent = currentScore;
  } else if (randomDiceRoll === 1) {
    //Switch to next player
    currentScore = 0;
    currentScore0.textContent = currentScore;
  }
});
