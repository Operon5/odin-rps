let options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let decision = (options[Math.floor(Math.random() * options.length)]);
    return decision;
}

function playerSelection() {
    prompt('Choose Rock, Paper or Scissors.');
}


let computerSelection = getComputerChoice();

playerSelection();
console.log(computerSelection);