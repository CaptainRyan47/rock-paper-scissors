// returns random choice between rock, paper and scissors
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return 'rock';
  }
  else if (choice === 1) {
    return 'paper';
  }
  else if (choice === 2) {
    return 'scissors';
  } else {
    console.error('invalid computer choice');
  }
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  const results = [null, playerChoice, computerChoice];

  if (playerChoice === null || playerChoice === undefined) {
    console.log('!!!!!!!!!');
    return;
  }

  if (playerChoice === 'rock') {
    if (computerChoice === 'rock') {
      results[0] = 'tie';
      return results;
    } else if (computerChoice === 'paper') {
      results[0] = 'lose';
      return results;
    } else results[0] = 'win';
    return results;
  }

  if (playerChoice === 'paper') {
    if (computerChoice === 'paper') {
      results[0] = 'tie';
      return results;
    } else if (computerChoice === 'scissors') {
      results[0] = 'lose';
      return results;
    } else results[0] = 'win';
    return results;
  }

  if (playerChoice === 'scissors') {
    if (computerChoice === 'scissors') {
      results[0] = 'tie';
      return results;
    } else if (computerChoice === 'rock') {
      results[0] = 'lose';
      return results;
    } else results[0] = 'win';
    return results;
  }
}

function game(playerChoice) {
  let results = [];

  results = playRound(playerChoice);
  if (results[0] === 'win') {
    playerScoreElement.textContent = ++playerScore;
    console.log(results);
    printResults(results);
  }
  if (results[0] === 'lose') {
    computerScoreElement.textContent = ++computerScore;
    console.log(results);
    printResults(results);
  }
  if (results[0] === 'tie') {
    ties.textContent = ++tieCounter;
    console.log(results);
    printResults(results);
  }
  if (playerScore >= 5) {
    console.log('You win!');
    console.log('Your Score: ' + playerScore);
    console.log('ComputerScore: ' + computerScore);
  }
  if (computerScore >= 5) {
    console.log('You Lose :(');
    console.log('Your Score: ' + playerScore);
    console.log('ComputerScore: ' + computerScore);
  }
}

function printResults(results) {
  const para = document.createElement('p');
  para.setAttribute('class', 'results');
  if (results[0] === 'tie') results[0] = 'tied';
  para.textContent =
    'You ' + results[0] + '! ' + results[1].toUpperCase()
    + ' vs ' + results[2].toUpperCase() + '.';
  resultsContainer.insertBefore(para, document.querySelector('.results'));
}

let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => game(rock.id));
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => game(paper.id));
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => game(scissors.id));

const buttonsContainer = document.querySelector('#buttons-container');
const resultsContainer = document.querySelector('#results-container');
const playerScoreElement = document.querySelector('#player-score');
const computerScoreElement = document.querySelector('#computer-score');
const ties = document.querySelector('#ties');