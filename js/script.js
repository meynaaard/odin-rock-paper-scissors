/* 
Computer Choice:
1. Create a function named getComputerChoice
2. Create a variable named randomNumber
3. Assign expression that generates a random number from 0 to 1
4. Return "rock" if less than 1/3
5. Return "paper" if less than 2/3
6. Otherwise return "scissors"

Human Choice:
1. Create a function named getHumanChoice
2. Prompt user string input for choices:
    "rock", "paper", and "scissors"
3. return the string value

Score Variables:
1. Create two variables named humanScore and computerScore
2. Initialize humanScore and computerScore to 0

Play Round:
1. Create a function named playRound
2. Define parameters humanChoice and computerChoice
3. Convert humanChoice return value to lowercase
4. Create variables named humanSelection and computerSelection
5. Assign the appropriate functions to these variables namely: 
    getHumanChoice() and getComputerChoice()
6. Determine round winner, increment score accordingly
7. Pass the variables above as arguments of playRound() in the next step

Play Game:
1. Create a function called playGame
2. Move playRound function and variables inside playGame()
3. Create a variable named roundCount
4. Initialize roundCount to 1
5. Loop playGame() while roundCount <= 5
6. Put function variables inside the loop to get new choices each round
7. Declare winner
*/

function getComputerChoice() {
  let randomNumber = (Math.random() * 1);
  let computerChoice;
  if (randomNumber < 1/3 ) {
    computerChoice = "rock";
  } else if (randomNumber < 2/3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("rock, paper, scissors:", "");
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
      alert("You win! Rock beats Scissors");
      humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      alert("You lose! Rock beats Scissors");
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      alert("You win! Paper beats Rock");
      humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      alert("You lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      alert("You win! Scissors beat Paper");
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      alert("You lose! Scissors beat Paper");
      computerScore++;
    } else if (humanChoice == computerChoice) {
      alert("Draw!");
    }
  }

  roundCount = 1;
  while (roundCount <= 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    roundCount++;
  }

  let result;
  if (humanScore > computerScore) {
    result = "You Win!";
  } else if (humanScore == computerScore) {
    result = "Draw!";
  } else {
    result = "You Lose!";
  }

  alert(`Human: ${humanScore}\nComputer: ${computerScore}\n\n${result}`);
}

playGame();
