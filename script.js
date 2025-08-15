playGame()

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1: return "ROCK";
        case 2: return "PAPER";
        case 3: return "SCISSORS";
    }
}

function getHumanChoice() {
    return prompt("Your choice: ")
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;
    
    for (let index = 0; index < 5; index++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
    console.log("Ties: " + ties)

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        if (humanChoice === computerChoice) {
            console.log(`You tied! ${humanChoice} ties with ${computerChoice}`)
            ties++;
        } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS"
            || humanChoice === "SCISSORS" && computerChoice === "PAPER"
            || humanChoice === "PAPER" && computerChoice === "ROCK") {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        } else {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        }
    }
}
