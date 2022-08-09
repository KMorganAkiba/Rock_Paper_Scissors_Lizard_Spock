//set initial global variables
let playerOneSelection = '';
let playerTWoSelection = '';
let playerOneScore = 0;
let playerTwoScore = 0;
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];


function getComputerChoice(){
    playerTWoSelection = choices[Math.floor(Math.random()*choices.length)];
        return playerTWoSelection
}

function victoryCondition(a,b){
    // rock victory logic
    if (a === 'rock' && (b === 'lizard' || b === 'scissors')){
            console.log('YOU WIN, '+ a + ' crushes ' + b+ '!');
            playerOneScore += 1;
    }
    if (b === 'rock' && (a === 'lizard' || a === 'scissors')){
            console.log('YOU Loose, '+ b + ' crushes ' + a + '!');
            playerTwoScore += 1;
    }
    
    // paper victory logic
    if (a === 'paper' && (b === 'rock' || b === 'spock')){
        if (b === 'rock'){
            console.log('YOU WIN, '+ a + ' covers ' + b+ '!');
            playerOneScore += 1;
        }
        else{
            console.log('YOU WIN, '+ a + ' disproves ' + b+ '!');
            playerOneScore += 1;
        }
    }
    if (b === 'paper' && (a === 'rock' || a === 'spock')){
        if (a === 'rock'){
            console.log('YOU Loose, '+ b + ' covers ' + a+ '!');
            playerTwoScore += 1;
        }
        else{
            console.log('YOU Loose, '+ b + ' disproves ' + a+ '!');
            playerTwoScore += 1;
        }
    }

    // scissors victory logic
    if (a === 'scissors' && (b === 'paper' || b === 'lizard')){
        if (b === 'paper'){
            console.log('YOU WIN, '+ a + ' cuts ' + b+ '!');
            playerOneScore += 1;
        }
        else{
            console.log('YOU WIN, '+ a + ' decapitates ' + b+ '!');
            playerOneScore += 1;
        }
    }
    if (b === 'scissors' && (a === 'paper' || a === 'lizard')){
        if (a === 'paper'){
            console.log('YOU Loose, '+ b + ' cuts ' + a+ '!');
            playerTwoScore += 1;
        }
        else{
            console.log('YOU Loose, '+ b + ' decapitates ' + a+ '!');
            playerTwoScore += 1;
        }
    }

    // lizard victory logic
    if (a === 'lizard' && (b === 'paper' || b === 'spock')){
        if (b === 'paper'){
            console.log('YOU WIN, '+ a + ' eats ' + b+ '!');
            playerOneScore += 1;
        }
        else{
            console.log('YOU WIN, '+ a + ' poisons ' + b+ '!');
            playerOneScore += 1;
        }
    }
    if (b === 'lizard' && (a === 'paper' || a === 'spock')){
        if (a === 'paper'){
            console.log('YOU Loose, '+ b + ' eats ' + a+ '!');
            playerTwoScore += 1;
        }
        else{
            console.log('YOU Loose, '+ b + ' poisons ' + a+ '!');
            playerTwoScore += 1;
        }
    }

    // spock victory logic
    if (a === 'spock' && (b === 'rock' || b === 'scissors')){
        if (b === 'rock'){
            console.log('YOU WIN, '+ a + ' vaporizes ' + b+ '!');
            playerOneScore += 1;
        }
        else{
            console.log('YOU WIN, '+ a + ' smashes ' + b+ '!');
            playerOneScore += 1;
        }
    }
    if (b === 'spock' && (a === 'rock' || a === 'scissors')){
        if (a === 'rock'){
            console.log('YOU Loose, '+ b + ' vaporizes ' + a+ '!');
            playerTwoScore += 1;
        }
        else{
            console.log('YOU Loose, '+ b + ' smashes ' + a+ '!'); 
            playerTwoScore += 1;
        }
    }
    // draw victory Condition
    else if (a === b){
        console.log('This Contest is a Draw!')
    }
    
}


//promt user with the premise of the game

//initiate game loop
    
    
//validate users selection 

//compare players variables looping through win conditions

//incrament winners tally by 1 

//check to see if either side has won 5 games

//if yes end game and announce winner

//if no loop back throught the game until victory condition has been met.


getComputerChoice();
console.log(playerTWoSelection);
victoryCondition(playerOneSelection,playerTWoSelection);
