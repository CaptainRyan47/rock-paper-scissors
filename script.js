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

function playerChoice() {
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


// Play round function:
//  Compare computer and player choice

//    if player chose rock
//      if computer chose rock
//        return tie
//      else if computer chose paper
//        return lose
//      else return win

//    if player chose paper
//      if computer chose paper
//        return tie
//      else if computer chose scissors
//        return lose
//      else return win

//    if player chose scissors
//      if computer chose scissors
//        return tie
//      else if computer chose rock
//        return lose
//      else return win


// Game function:
//  print Let's play Rock Paper Scissors! Best 3 out of 5.
//  Loop while player score < 3 and computer score < 3
//    computer choice function
//    player choice function
//    play round function
//    if win
//      add 1 to player score
//      print you won this round!
//    if lose
//      add 1 to computer score
//      print you lost this round.
//    if tie
//      add 1 to tie counter
//      print its a draw.
//  if player score >= 3
//    print player score and computer score and tie counter
//    print You WIN
//  if computer score >= 3
//    print player score and computer score and tie counter
//    print You lose :(