playGame();

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1: return "ROCK";
        case 2: return "PAPER";
        case 3: return "SCISSORS";
    }
}

function getHumanChoice() {
    return prompt("Your choice: ");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;

    const resultDisplay = document.querySelector('#result-display')
    const scoreDisplay = document.querySelector('#score-display')

    document.querySelector('#rock').addEventListener("click", () => playRound("ROCK", getComputerChoice()))
    document.querySelector('#paper').addEventListener("click", () => playRound("PAPER", getComputerChoice()))
    document.querySelector('#scissors').addEventListener("click", () => playRound("SCISSORS", getComputerChoice()))

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("Ties: " + ties);

    scoreDisplay.textContent = `
            Human Score: ${humanScore}
            Computer Score: ${computerScore}
            Ties: ${ties}`

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        if (humanChoice === computerChoice) {
            resultDisplay.textContent = `You tied! ${humanChoice} ties with ${computerChoice}`;
            ties++;
        } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS"
            || humanChoice === "SCISSORS" && computerChoice === "PAPER"
            || humanChoice === "PAPER" && computerChoice === "ROCK") {
            resultDisplay.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else {
            resultDisplay.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        scoreDisplay.textContent = `
            Human Score: ${humanScore}
            Computer Score: ${computerScore}
            Ties: ${ties}`

        if (humanScore >= 5) {
            resultDisplay.textContent = `Human won!`
            for(button of document.querySelectorAll('.choice-button')){
                button.disabled = true
            }
        }
        if (computerScore >= 5) {
            resultDisplay.textContent = `Computer won!`
            for(button of document.querySelectorAll('.choice-button')){
                button.disabled = true
            }
        }
    }
}

