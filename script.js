'use strict';

//Selecting elements:
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let diceButton = document.querySelector('.btn--roll');

//Starting conditions:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

function randomDiceGenerator() {
  return Math.trunc(Math.random() * 6 + 1);
}

diceButton.addEventListener('click', randomDiceGenerator);
