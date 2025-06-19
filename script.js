let computerScore = 0;
let humanScore = 0;

let container = document.querySelector('.play-container')
let playBtns = document.querySelectorAll('.rps')
let result = document.querySelector('.result')
let score = document.querySelector('.scores')
let choices = document.querySelector('.choices')
let winner = document.querySelector('.winner')

let resetBtn = document.createElement('btn')
resetBtn.classList.toggle('reset')
resetBtn.innerText = 'Reset'
resetBtn.style.backgroundColor = 'red'
resetBtn.style.border = '2px solid black'

let playerChoice = Array.from(playBtns)
let humChoice;
let computerChoice;

console.log('Rock, Paper, Scissors!');

function getComputerChoice(choice) {
    if (choice == 1) {
        return 'Rock';
    } else if (choice == 2) {
        return 'Paper';
    } else if (choice == 3) {
        return 'Scissors';
    }
}

function playRound(computerChoice, humanChoice) {
    if (humanChoice == computerChoice) {
        return `It is a draw: Both chose ${humanChoice}`;
    } else if (humanChoice == 'Rock' && computerChoice == 'Paper') {
        computerScore += 1;
        return `You lose ${computerChoice} beats ${humanChoice}`;

    } else if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
        humanScore += 1;
        return `You win ${humanChoice} beats ${computerChoice}`;

    } else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
        humanScore += 1;
        return `You win ${humanChoice} beats ${computerChoice}`;

    } else if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
        computerScore += 1
        return `You lose ${computerChoice} beats ${humanChoice}`;

    } else if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
        computerScore += 1;
        return `You lose ${computerChoice} beats ${humanChoice}`;

    } else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
        humanScore += 1;
        return `You win ${humanChoice} beats ${computerChoice}`;
    }
}

function playGame() {
    if (humanScore == 5) {
        winner.textContent = `You have won!: Computer: ${computerScore} | Player: ${humanScore}`
        container.appendChild(resetBtn)
        return
    } else if (computerScore == 5) {
        winner.textContent = `Sorry you have lost: Computer: ${computerScore} | Player: ${humanScore}`
        container.appendChild(resetBtn)
        return
    }

    let compChoice = Math.floor(Math.random() * 3) + 1;

    computerChoice = getComputerChoice(compChoice);

    choices.textContent = `Player chose ${humChoice} || Computer chose ${computerChoice}`;

    console.log(`\n--- Game Over! Final Scores ---`);
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

}

resetBtn.addEventListener('click', () => {
    computerScore = 0;
    humanScore = 0;
    result.textContent = ''
    choices.textContent = ''
    score.textContent = ''
    winner.textContent = ''
    resetBtn.remove()
})

playerChoice.forEach(choice => {
    choice.addEventListener('click', (e) => {
        humChoice = e.target.value
        let resultOfRound = playRound(computerChoice, humChoice);

        result.textContent = resultOfRound
        playGame()
    })
})





