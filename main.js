const options = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound() {
  let playerSelection = prompt("Insert ROCK, PAPER OR SCISSORS").toUpperCase();
  let computerSelection = computerPlay();
  console.log(playerSelection);

  if (!options.includes(playerSelection)) {
    return "Wrong choice, you must select 'ROCK', 'PAPER' OR 'SCISSORS'";
  } else {
    if (playerSelection === "ROCK") {
      if (computerSelection === "SCISSORS") {
        return "You win! ROCK beats SCISSORS";
      } else if (computerSelection === "PAPER") {
        return "You Lose! PAPER beats ROCK";
      } else {
        return "Its a tie";
      }
    } else if (playerSelection === "PAPER") {
      if (computerSelection === "ROCK") {
        return "You win! PAPER beats ROCK";
      } else if (computerSelection === "SCISSORS") {
        return "You Lose! SCISSORS beats PAPER";
      } else {
        return "Its a tie";
      }
    } else {
      if (computerSelection === "PAPER") {
        return "You win! SCISSORS beats PAPER";
      } else if (computerSelection === "ROCK") {
        return "You Lose! ROCK beats SCISSORS";
      } else {
        return "Its a tie";
      }
    }
  }
}

function game() {
  let i = 5;
  while (i > 0) {
    console.log(playRound());
    i--;
  }
}
