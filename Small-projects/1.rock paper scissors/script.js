const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDispaly = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDispaly.innerHTML = userChoice
    generateComputerChoice()
    getResult()

})) 

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'its a won!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'its a lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'its a lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'its a won!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'its a lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'its a won!'
    }

    resultDisplay.innerHTML = result

}