//Variables for stats
let playerScore = 0
let computerScore = 0
let round = 1

//Variables for DOM Methods
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

//Event listener's for buttons
rockBtn.addEventListener('click', () => game('rock'))
paperBtn.addEventListener('click', () => game('paper'))
scissorsBtn.addEventListener('click', () => game('scissors'))

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

//plays the game
function game(playerSelection){
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection)
    displayMatchResults(computerScore, playerScore)
}

//Displays results after player or computer reaches 5 points
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

//Logic for playing a round
function playRound(playerSelection, computerSelection){
    let playerSelectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    let computerSelectionCapitalized = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    
    if (playerSelection == computerSelection){
        roundDisplay.innerText = 'Draw! No points awarded.'
        currentRoundDisplay.textContent = `Round: ${round}`
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || 
    playerSelection == 'paper' && computerSelection == 'rock' || 
    playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        currentRoundDisplay.textContent = `Round: ${round}`
        playerScoreDisplay.textContent = `Player score: ${playerScore}`;
        roundDisplay.textContent =  playerSelectionCapitalized + ' beats ' +
        computerSelection + '! One point to player!'
    } else {
        computerScore++;
        currentRoundDisplay.textContent = `Round: ${round}`
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`
        roundDisplay.textContent =  computerSelectionCapitalized + ' beats ' +
        playerSelection + '! One point to computer!'
    }
    playerChoiceDisplay.textContent = 'Player chose: ' + playerSelectionCapitalized
    computerChoiceDisplay.textContent = 'Computer chose: ' + computerSelectionCapitalized
    round++;
}