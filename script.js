// Computer choice function:
//  get random number
//  multiply by 3
//  round down to nearest int
//    if number is 0
//      return rock
//    if number is 1
//      return paper
//    if number is 2
//      return scissors
//    else
//      return error

// Player choice function:
//  prompt player for choice
//  change player choice to lowercase 
//  return player choice

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