



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
    let computerScore = 0;
    let humanScore = 0;

    let compChoice = Math.floor(Math.random() * 3) + 1;
    let humChoice = prompt('Rock, Paper or Scissors?').toLowerCase();

    let computerChoice = getComputerChoice(compChoice);

    let resultOfRound = playRound(computerChoice, humanChoice);
    console.log(resultOfRound)
    console.log(`Player chose ${humanChoice} || Computer chose ${computerChoice}`)
    console.log(`Next round is ${i + 1}`);

    console.log(`\n--- Game Over! Final Scores ---`);
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);


    if (computerScore > humanScore) {
        console.log(`Sorry you have lost: Computer: ${computerScore} | Player: ${humanScore}`);
    } else if (humanScore > computerScore) {
        console.log(`You have won!: Computer: ${computerScore} | Player: ${humanScore}`);
    } else {
        console.log(`The game is a tie!`)
    }
}



playGame()


