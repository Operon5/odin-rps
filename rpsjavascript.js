let options = ['rock', 'paper', 'scissors'];

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener ('click', () => {
    playRound('rock');
    console.log('Rock!');
});

paper.addEventListener ('click', () => {
    playRound('scissors');
    console.log('Paper!');
});

scissors.addEventListener ('click', () => {
    playRound('paper');
    console.log('Scissors!');
});

function getComputerChoice() {
    let decision = (options[Math.floor(Math.random() * options.length)]);
    return decision;
}

let playerCounter = 0;
let computerCounter = 0;

document.querySelector('#player-score').innerHTML = playerCounter;

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
        console.log('The score was You: ' + playerCounter + ' ' + 'Computer: ' + computerCounter);
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose...');
        ++computerCounter;
        document.querySelector('#comp-score').innerHTML = computerCounter;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win!');
        ++playerCounter;
        document.querySelector('#player-score').innerHTML = playerCounter;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose...');
        ++computerCounter;
        document.querySelector('#comp-score').innerHTML = computerCounter;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win!');
        ++playerCounter;
        document.querySelector('#player-score').innerHTML = playerCounter;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose...');
        ++computerCounter;
        document.querySelector('#comp-score').innerHTML = computerCounter;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win!');
        ++playerCounter;
        document.querySelector('#player-score').innerHTML = playerCounter;
    }
    results();
};

function results() {
        if (playerCounter >= 5) {
            document.querySelector('#result').innerHTML = 'You won the game! Refresh to try again.'; 
            }
            else if (computerCounter >=5) {
            document.querySelector('#result').innerHTML = 'You lost the game... Refresh to try again.';
            }
};



console.log('The score was You: ' + playerCounter + ' ' + 'Computer: ' + computerCounter);