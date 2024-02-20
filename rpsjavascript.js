let options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let decision = (options[Math.floor(Math.random() * options.length)]);
    return decision;
}

function playerSelection() {
    let playerEntry = prompt('Choose Rock, Paper or Scissors.').toLowerCase();
    
    if (playerEntry === 'rock' || playerEntry === 'paper' || playerEntry === 'scissors') {
        let playerDecision = playerEntry;
        return playerDecision;
    }
    else {
        alert('Please choose Rock, Paper or Scissors.');
        playerSelection();
    }
}


let computerSelection = getComputerChoice();

playerSelection();
console.log(computerSelection);