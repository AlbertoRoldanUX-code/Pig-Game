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
let scores, currentScore, activePlayer, playing;

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  diceEl.classList.add('hidden');
  currentScore1.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

init();

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
  if (playing) {
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
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //Add score to score of active player's score
    scores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    //Check if player's score is >=100
    //Finish the game
    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      //Switch player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
