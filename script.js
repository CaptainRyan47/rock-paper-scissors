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

function getPlayerChoice() {
  let i = 0;
  while (i === 0) {
    let choice = prompt('Enter rock paper or scissors: ');
    choice = choice.toLowerCase();
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
      console.log('You must pick rock, paper, or scissors. Try again.')
    }
    else {
      i = 1;
      return choice;
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      return 'tie';
    } else if (computerSelection === 'paper') {
      return 'lose';
    } else return 'win';
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'paper') {
      return 'tie';
    } else if (computerSelection === 'scissors') {
      return 'lose';
    } else return 'win';
  }

  if (playerSelection === 'scissors') {
    if (computerSelection === 'scissors') {
      return 'tie';
    } else if (computerSelection === 'rock') {
      return 'lose';
    } else return 'win';
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let tieCounter = 0;
  let result;
  console.log('Let\'s play Rock Paper Scissors! Best 3 out of 5.')
  while (playerScore < 3 && computerScore < 3) {
    result = playRound(getPlayerChoice(), getComputerChoice());
    if (result === 'win') {
      playerScore++;
      console.log(result);
    }
    if (result === 'lose') {
      computerScore++;
      console.log(result);
    }
    if (result === 'tie') {
      tieCounter++;
      console.log(result);
    }
  }
  if (playerScore >= 3) {
    console.log('You win!');
    console.log('Your Score: ' + playerScore);
    console.log('ComputerScore: ' + computerScore);
  }
  if (computerScore >= 3) {
    console.log('You Lose :(');
    console.log('Your Score: ' + playerScore);
    console.log('ComputerScore: ' + computerScore);
  }
}

game();