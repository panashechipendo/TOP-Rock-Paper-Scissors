console.log('Hello, World!');

let computerChoice = Math.floor(Math.random() * 3) + 1;
let humanChoice = prompt('Rock, Paper or Scissors?').toLowerCase()

function getComputerChoice(choice){
    if (choice == 1){;
        return 'Rock';
    }else if (choice == 2){
        return 'Paper';
    }else if (choice) {
        return 'Scissors';
    }
}

function getHumanChoice(choice){
    if (choice == 'rock'){
        return 'Rock';
    }else if (choice == 'paper'){
        return 'Paper';
    }else if (choice == 'scissors'){
        return 'Scissors';
    }else {
        return 'invalid input';
    }
}

console.log(getComputerChoice(computerChoice));
console.log(getHumanChoice(humanChoice));


