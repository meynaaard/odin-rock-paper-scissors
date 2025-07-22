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

let humanScore = 0;
let computerScore = 0;

function playGame() {
  const buttons = document.querySelectorAll(".buttons button");

  function handleButtonClick(event) {
    let humanSelection = "";
    const computerSelection = getComputerChoice();

    switch (event.target.className) {
      case "rock":
        humanSelection = "rock";
        break;
      case "paper":
        humanSelection = "paper";
        break;
      case "scissors":
        humanSelection = "scissors";
        break;
    }

    console.log(`Human choice: ${humanSelection}`);
    console.log(`Computer choice: ${computerSelection}`);

    playRound(humanSelection, computerSelection);

    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (humanScore === 5 || computerScore === 5) {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  function playRound(humanChoice, computerChoice) {
    const rules = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };

    if (humanChoice === computerChoice) {
      alert("Draw!");
      return;
    }

    if (rules[humanChoice] === computerChoice) {
      alert(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
      humanScore++;
    } else {
      alert(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
      computerScore++;
    }

    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
  
  let result;
  if (humanScore > computerScore) {
    result = "You Win!";
  } else if (humanScore == computerScore) {
    result = "Draw!";
  } else {
    result = "You Lose!";
  }

  // alert(`Human: ${humanScore}\nComputer: ${computerScore}\n\n${result}`);
}

playGame();
