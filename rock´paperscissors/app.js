var result = document.querySelector('.resultOfGame');

function userChoseScissors() {
    computerChose();
    checkWinner("scissors");
}

function userChoseRock() {
    computerChose();
    checkWinner("rock");
}

function userChosePaper() {
    computerChose();
    checkWinner("paper");
}

function checkWinner(userChoice) {
    if (userChoice === chosenOfComputer) {
        result.innerText = "Draw";
    } else if ((userChoice === "scissors" && chosenOfComputer === "paper") || 
               (userChoice === "rock" && chosenOfComputer === "scissors") || 
               (userChoice === "paper" && chosenOfComputer === "rock")) {
        result.innerText = "You Won!";
    } else {
        result.innerText = "You Lose!";
    }
    increasesScoreElement();
}

var h2element = document.querySelector(".chosen"); 
var chosenOfComputer = "";

var numberOfWins = 0;
var numberOfDraws = 0;
var numberOfLosses = 0;

function increasesScoreElement() {
    if (result.innerText === "Draw") {
        numberOfDraws++;
        document.querySelector('.drawScore').innerText = "Draws: " + numberOfDraws;
    } else if (result.innerText === "You Won!") {
        numberOfWins++;
        document.querySelector('.winScore').innerText = "Wins: " + numberOfWins;
    } else {
        numberOfLosses++;
        document.querySelector('.loseScore').innerText = "Loses: " + numberOfLosses;
    } 
}

function computerChose() {
    var randomDigit = Math.random() * 9;
    if (randomDigit <= 3) {
        chosenOfComputer = "paper";
    } else if (randomDigit > 3 && randomDigit <= 6) {
        chosenOfComputer = "rock";
    } else {
        chosenOfComputer = "scissors";
    }
    h2element.innerText = "Computer has chosen: " + chosenOfComputer;
}



function setToNull() {
    numberOfWins = 0;
    numberOfDraws = 0;
    numberOfLosses = 0;
    document.querySelector('.drawScore').innerText = "Draws: " + numberOfDraws;
    document.querySelector('.winScore').innerText = "Wins: " + numberOfWins;
    document.querySelector('.loseScore').innerText = "Loses: " + numberOfLosses;
}