// create a function getComputerChoice which will randomly return rock, paper or scissors
// Create a function getHumanChoice which will return one of the valid choice
// declare two variables humanScore and computerScore in the global scope and initialize the value of 0.
// Create a function playRound which takes two parameters humanChoice and computerChoice
// Use thse two parameters to take the human and computer choices as arguments.
// Make the humanChoice insensitive
// Write the code for playRound function to outputs a string delcaring the winner.
// Increment the score in humanScore or computerScore
// Create a function playGame and score variables so they are declared inside of the new playGame function.
// Call playRound function 5 times.

// Function to get computer choice
function getComputerChoice() {
  let computer_choice = Math.random(0,1);

  // making choices based on random outputs
  if (computer_choice >0 && computer_choice <=0.33) {
    return "rock";
  }

  else if (computer_choice >0.33 && computer_choice <= 0.66) {
    return "paper";
  }

  else {
    return "scissors";
  }
}

// Testing the output
// console.log("Computer chose : ", getComputerChoice());
getComputerChoice();


// Getting the user input
function humanChoice() {
  let human_choice = prompt("Enter your choice from rock, paper and scissors");
  human_choice = human_choice.toLowerCase();
  return human_choice;
}

// Testing the output
// console.log("You chose : ", humanChoice());
// humanChoice();



// Scoreboard
let humanScore = 0;
let computerScore = 0;



// Playing one round
function playRound(humanChoice, computerChoice) {
  
  // Creating the logic of playing a game.
  //  if human choose rock and computer choose rock
  if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("computer chose", computerChoice);
    console.log("You chose:", humanChoice);
    return "No one won";
  }

  // if human choice is paper and computer choice is paper
  else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("computer chose", computerChoice);
    console.log("You chose:", humanChoice);
    return "No one won";
  }

  // if human choice is scissors and computer choice is scissors
  else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("computer chose", computerChoice);
    console.log("You chose:", humanChoice);
    return "No one won";
  }


  //  For rock as computer choice
  // if human choice is paper and computer choice is rock
  else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("computer chose", computerChoice);
    console.log("You chose:", humanChoice);
    return "Paper won";
  }
  // if human choice is scissors and computer choice is rock
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("computer chose", computerChoice);
    console.log("You chose:", humanChoice);
    return "Rock won";
  }

  // For paper as computer choice
  // if human choice is rock and computer choice is paper
  else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("computer chose", computerChoice);
    console.log("You chose:", humanChoice);
    return "Paper won";
  }
  // if human choice is scissors and computer choice is rock
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("computer chose: ", computerChoice);
    console.log("You chose:", humanChoice);
    return "scissors won";
  }


    // For scissors as computer choice
  // if human choice is rock and computer choice is scissors
  else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("computer chose", computerChoice);
    console.log("You chose:", humanChoice);
    return "Rock won";
  }
  // if human choice is paper and computer choice is scissors
  else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("computer chose", computerChoice);
    console.log("You chose:", humanChoice);
    return "Scissors won";
  }

  else {
    return "Please enter a valid input";
  }
}


console.log(playRound(humanChoice(), getComputerChoice()));