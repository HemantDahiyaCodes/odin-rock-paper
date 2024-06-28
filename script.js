// Create 3 buttons - rock, paper and scissors.
// Then declare a variable `userChoice` which will store the value of the buttons choices.
// Then assign event listeners to rock, paper and scissors.
// Create a function for each button will help. rock() for rock, paper() for paper, scissors() for scissors.
// When the user click on the rock, the event listener will update the value of userchoice to "rock".
// Same for paper and scissors.
// Then make a `playRound function` that takes two parameters(userChoice, ComputerChoice).
// Then declare a `computerChoice` function.
// It will output 3 values - rock, paper or scissors randomly.
// Then compare the values using conditionals and output the winner.
// Run the playRound function with the value `userchoice` and `ComputerChoice`.


// Paragraph
const para = document.querySelector("p");
// Computer choice
function computerChoice() {
let computerInput = Math.random();
let computer_Choice;

if (computerInput >= 0.33 && computerInput < 0.34) {
  computer_Choice = "rock";

} else if (computerInput >= 0.35 && computerInput < 0.65) {
  computer_Choice = "paper";

} else if (computerInput >= 0.66 && computerInput < 0.99) {
  computer_Choice = "scissors";
}
 return computer_Choice;
}
let userChoice;

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  userChoice = "rock";
//   console.log(userChoice);
  playRound(userChoice, computerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  userChoice = "paper";
//   console.log(userChoice);
  playRound(userChoice, computerChoice());
});

const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click", () => {
  userChoice = "scissors";
//   console.log(userChoice);
  playRound(userChoice, computerChoice());
});


// PlayRound Function.
function playRound(userSelection, computerSelection) {
    userSelection = userChoice;
    computerSelection = computerChoice();

    // Comparing both inputs and declaring the winner;
    
// if both of the inputs are same.
    if (userSelection == computerSelection) {
        // document.write("It's a tie");
        para.textContent = `You chose: ${userSelection}`;
        para.textContent = `Computer chose: ${computerSelection}`;
        para.textContent = `You chose ${userSelection}. Computer chose ${computerSelection}. It's a tie`;
    }

// For the inputs where human will win
    else if (userSelection == "rock" && computerSelection =="scissors" || userSelection == "paper" && computerSelection == "rock" || userSelection == "scissors" && computerSelection == "paper") {
        // document.write(`User won`);
        para.textContent = `You chose ${userSelection}. Computer chose ${computerSelection}. You won`;
    }

// For the inputs where computer will win
    else if (userSelection == "scissors" && computerSelection =="rock" || userSelection == "rock" && computerSelection == "paper" || userSelection == "paper" && computerSelection == "scissors") {
        // document.write(`Computer won`);
        para.textContent = `You chose ${userSelection}. Computer chose ${computerSelection}. Computer won`;
    }
};