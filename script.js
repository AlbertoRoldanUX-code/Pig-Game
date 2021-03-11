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
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');

//Starting conditions:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

function switchPlayer() {
  currentScore = 0;
  document.querySelector(
    `#current--${activePlayer}`
  ).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

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

    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  //Add score to score of active player's score
  scores[activePlayer] += currentScore;

  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  //Check if player's score is >=100
  //Finish the game

  //Switch player
  switchPlayer();
});
