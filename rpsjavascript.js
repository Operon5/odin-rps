let options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let decision = (options[Math.floor(Math.random() * options.length)]);
    return decision;
}

function playerDecision() {
    let playerEntry = prompt('Choose Rock, Paper or Scissors.').toLowerCase();
    
    if (playerEntry === 'rock' || playerEntry === 'paper' || playerEntry === 'scissors') {
        let playerChoice = playerEntry;
        return playerChoice;
    }
    else {
        alert('Please choose Rock, Paper or Scissors.');
    }
}

alert('First to five, wins.');

let playerCounter = 0;
let computerCounter = 0;

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = playerDecision();
    if (playerSelection === computerSelection) {
        alert("It's a draw!");
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose...');
        ++computerCounter;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win!');
        ++playerCounter;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose...');
        ++computerCounter;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You win!');
        ++playerCounter;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose...');
        ++computerCounter;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win!');
        ++playerCounter;
    }
}

function playGame() {
    playRound(); {
        if (playerCounter >= 5 || computerCounter >=5) {
            if (playerCounter >= 5) {
                alert('You won the game!'); 
            }
            else if (computerCounter >=5) {
                alert('You lost the game...');
            }
        }
        else {
        playGame();
        }
    }
}

playGame();

console.log('The score was You: ' + playerCounter + ' ' + 'Computer: ' + computerCounter);