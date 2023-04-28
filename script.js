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
  compChoice = getComputerChoice();
  const results = [null, playerChoice, compChoice];

  if (playerChoice === null || playerChoice === undefined) {
    console.log('!!!!!!!!!');
    return;
  }

  if (playerChoice === 'rock') {
    if (compChoice === 'rock') {
      results[0] = 'tie';
      return results;
    } else if (compChoice === 'paper') {
      results[0] = 'lose';
      return results;
    } else results[0] = 'win';
    return results;
  }

  if (playerChoice === 'paper') {
    if (compChoice === 'paper') {
      results[0] = 'tie';
      return results;
    } else if (compChoice === 'scissors') {
      results[0] = 'lose';
      return results;
    } else results[0] = 'win';
    return results;
  }

  if (playerChoice === 'scissors') {
    if (compChoice === 'scissors') {
      results[0] = 'tie';
      return results;
    } else if (compChoice === 'rock') {
      results[0] = 'lose';
      return results;
    } else results[0] = 'win';
    return results;
  }



}

function game(playerChoice) {
  let playerScore = 0;
  let computerScore = 0;
  let tieCounter = 0;
  let results = [];

  results = playRound(playerChoice);
  if (results[0] === 'win') {
    playerScore++;
    console.log(results);
  }
  if (results[0] === 'lose') {
    computerScore++;
    console.log(results);
  }
  if (results[0] === 'tie') {
    tieCounter++;
    console.log(results);
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

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => game(rock.id) );
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => game(paper.id));
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => game(scissors.id));