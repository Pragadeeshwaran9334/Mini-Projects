// const buttons = document.querySelectorAll("button");

// const resultEl = document.getElementById("result");

// const playerScoreEl = document.getElementById("user-score");

// const computerScoreEl = document.getElementById("computer-score");

// let playerScore = 0;
// let computerScore = 0;

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const result = playRound(button.id, computerPlay());
//     resultEl.textContent = result;
    
//   });
// });

// function computerPlay() {
//   const choices = ["rock", "paper", "scissors"];
//   const randomChoice = Math.floor(Math.random() * choices.length);
//   return choices[randomChoice];
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return "It's a tie!";
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissors" && computerSelection === "paper")
//   ) {
//     playerScore++;
//     playerScoreEl.textContent = playerScore;
//     return "You win! " + playerSelection + " beats " + computerSelection;
//   } else {
//     computerScore++;
//     computerScoreEl.textContent = computerScore;
//     return "You lose! " + computerSelection + " beats " + playerSelection;
//   }
// }




// let roundLimit = 5;
// let roundsPlayed = 0;

// function playGame(userChoice) {
//     if (roundsPlayed >= roundLimit) {
//         document.getElementById('message').classList.remove('hidden');
//         return;
//     }

//     const choices = ['rock', 'paper', 'scissors'];
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];

//     let result = '';

//     if (userChoice === computerChoice) {
//         result = "It's a tie!";
//     } else if (
//         (userChoice === 'rock' && computerChoice === 'scissors') ||
//         (userChoice === 'paper' && computerChoice === 'rock') ||
//         (userChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         result = 'You win!';
//     } else {
//         result = 'You lose!';
//     }

//     roundsPlayed++;
//     document.getElementById('result').textContent = `Result: ${result} (You: ${userChoice}, Computer: ${computerChoice})`;
//     document.getElementById('rounds').textContent = `Rounds Played: ${roundsPlayed} / ${roundLimit}`;
    
//     if (roundsPlayed >= roundLimit) {
//         document.getElementById('message').classList.remove('hidden');
//     }
// }




//chatgpt





// const buttons = document.querySelectorAll("button");

// const resultEl = document.getElementById("result");

// const playerScoreEl = document.getElementById("user-score");

// const computerScoreEl = document.getElementById("computer-score");

// const destinationScore = 15; // Change this value to the score required to win

// let playerScore = 0;
// let computerScore = 0;

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (playerScore < destinationScore && computerScore < destinationScore) {
//       const result = playRound(button.id, computerPlay());
//       resultEl.textContent = result;
//       checkForWinner();
//     }
//   });
// });

// function computerPlay() {
//   const choices = ["rock", "paper", "scissors"];
//   const randomChoice = Math.floor(Math.random() * choices.length);
//   return choices[randomChoice];
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return "It's a tie!";
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissors" && computerSelection === "paper")
//   ) {
//     playerScore++;
//     playerScoreEl.textContent = playerScore;
//     return "You win! " + playerSelection + " beats " + computerSelection;
//   } else {
//     computerScore++;
//     computerScoreEl.textContent = computerScore;
//     return "You lose! " + computerSelection + " beats " + playerSelection;
//   }
// }

// function checkForWinner() {
//   if (playerScore === destinationScore) {
//     resultEl.textContent = "Congratulations! You are the winner!";
//     disableButtons();
//   } else if (computerScore === destinationScore) {
//     resultEl.textContent = "Sorry! The computer wins!";
//     disableButtons();
//   }
// }

// function disableButtons() {
//   buttons.forEach((button) => {
//     button.disabled = true;
//   });
// }



// RESTART BUTTON


// 




//restart botton

const buttons = document.querySelectorAll("button:not(#restart-button)"); // Select buttons except the restart button

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

const resultModal = document.getElementById("result-modal");
const finalResultEl = document.getElementById("final-result");
const restartButton = document.getElementById("restart-button");

const destinationScore = 10; // Change this value to the score required to win

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerScore < destinationScore && computerScore < destinationScore) {
      const result = playRound(button.id, computerPlay());
      resultEl.textContent = result;
      checkForWinner();
    }
  });
});

restartButton.addEventListener("click", () => {
  restartGame();
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function checkForWinner() {
  if (playerScore === destinationScore) {
    finalResultEl.textContent = "Congratulations! You are the winner!";
    resultModal.style.display = "block";
    disableButtons();
  } else if (computerScore === destinationScore) {
    finalResultEl.textContent = "Sorry! The computer wins!";
    resultModal.style.display = "block";
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  resultEl.textContent = "";
  resultModal.style.display = "none";
  buttons.forEach((button) => {
    button.disabled = false;
  });
}
