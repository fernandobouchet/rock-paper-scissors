const options = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection = computerPlay()) {
  let result = "";
  if (playerSelection === computerSelection) {
    result = "tie";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  return result;
}
const result = document.querySelector("#results");
const resultContent = document.createElement("p");
resultContent.className = "result-content";
result.appendChild(resultContent);

const btns = document.querySelectorAll("input");
btns.forEach((button) => {
  button.addEventListener("click", () => {
    resultContent.textContent = playRound(button.id);
  });
});
