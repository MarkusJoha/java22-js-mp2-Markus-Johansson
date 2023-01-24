const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const turnCounter = document.querySelector("turnCounter");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerNameBtn = document.querySelector('#playerNameBtn');
const form = document.querySelector('form');
let playerName = document.querySelector('#playerName');
let player;
let computer;
let result;
let turns = 1;
let playerWins = 0;
let computerWins = 0;

function onFormSubmit(event) {
    event.preventDefault();
    playerText.innerHTML = playerName.value + ': ';
}


choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `${playerName.value}: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    let checkWins = checkWinner();
    resultText.textContent = checkWins;
    if(checkWins == 'You Lose!') {
        computerWins++;
    }
    else if(checkWins == 'You Win!') {
        playerWins++;
    }
    

    let playerWinsLabel = document.querySelector('#playerWinsLabel');
    playerWinsLabel.innerHTML = 'Player Wins: ' + playerWins;
    let computerWinsLabel = document.querySelector('#computerWinsLabel');
    computerWinsLabel.innerHTML = 'Computer Wins: ' + computerWins;
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1:
            computer = '✊';
            break;
        case 2:
            computer = '✋';
            break;
        case 3:
            computer = '✌️';
            break;
    }
}
function checkWinner() {
    

    if(player == computer) {
        return 'Draw!';
    }
    else if(computer == '✊') {
        return (player == '✋') ? 'You Win!' : 'You Lose!'
    }
    else if(computer == '✋') {
        return (player == '✌️') ? 'You Win!' : 'You Lose!'
    }
    else if(computer == '✌️') {
        return (player == '✊') ? 'You Win!' : 'You Lose!'
    }
}
function turn() {
    document.getElementById('turnCounter').innerHTML = 'Turns: ' + turns++;
    if(computerWins + playerWins == 2) {
        const rematchBtn = document.querySelector('#rematch');
        rematchBtn.style.display = 'inherit'
    } 
}
function refreshPage() {
    location.reload();
}
