//Keeps record of player's & computer's score
let playerScore = 0
let computerScore = 0
let round = 0

//Computer's selection
function computerPlay(){
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2: 
            return 'scissors';
    };
}
//plays the game for 5 rounds and keeps score
function game(playerSelection){
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection)
    displayMatchResults(computerScore, playerScore)
}

function displayMatchResults(computerScore, playerScore){
    let playerWinScore = playerScore - computerScore
    let playerLossScore = computerScore - playerScore
    if (computerScore === 5 || playerScore === 5){
        if (computerScore > playerScore){
            roundDisplay.textContent = 'You lost. Computer beat you by ' + playerLossScore + ' points.'
        }
        else {
            roundDisplay.textContent = 'You won! You beat the computer by ' + playerWinScore + ' points.'
        }
    }
}

//Plays a round and returns the score
function playRound(playerSelection, computerSelection){
    let playerSelectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    let computerSelectionCapitalized = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    
    if (playerSelection == computerSelection){
        round++
        playerChoiceDisplay.textContent = 'Player chose: ' + playerSelectionCapitalized
        computerChoiceDisplay.textContent = 'Computer chose: ' + computerSelectionCapitalized
        roundDisplay.innerText = 'Draw! No points awarded.'
        currentRoundDisplay.textContent = `Round: ${round}`
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || 
    playerSelection == 'paper' && computerSelection == 'rock' || 
    playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        round++;
        currentRoundDisplay.textContent = `Round: ${round}`
        playerScoreDisplay.textContent = `Player score: ${playerScore}`;
        playerChoiceDisplay.textContent = 'Player chose: ' + playerSelectionCapitalized
        computerChoiceDisplay.textContent = 'Computer chose: ' + computerSelectionCapitalized
        roundDisplay.textContent =  playerSelectionCapitalized + ' beats ' +
        computerSelection + '! One point to player!'

    } else {
        computerScore++;
        round++;
        currentRoundDisplay.textContent = `Round: ${round}`
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`
        playerChoiceDisplay.textContent = 'Player chose: ' + playerSelectionCapitalized
        computerChoiceDisplay.textContent = 'Computer chose: ' + computerSelectionCapitalized
        roundDisplay.textContent =  computerSelectionCapitalized + ' beats ' +
        playerSelection + '! One point to computer!'
    }
}

let currentRoundDisplay = document.getElementById('roundDisplay')
let playerChoiceDisplay = document.getElementById('playerChoice')
let computerChoiceDisplay = document.getElementById('computerChoice')
let roundDisplay = document.getElementById('roundResults');
let resultsDisplay = document.getElementById('results')
let playerScoreDisplay = document.getElementById('playerScore')
let computerScoreDisplay = document.getElementById('computerScore')

let rockBtn = document.getElementById('rock')
let paperBtn = document.getElementById('paper')
let scissorsBtn = document.getElementById('scissors')

rockBtn.addEventListener('click', () => game('rock'))
paperBtn.addEventListener('click', () => game('paper'))
scissorsBtn.addEventListener('click', () => game('scissors'))

//plays the game