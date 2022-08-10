//set initial global variables
let playerOneSelection ;
let playerTWoSelection ;
let playerOneScore = 0;
let playerTwoScore = 0;

//array of valid choices
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// generates a random valid choice for the computer opponent. 
function getComputerChoice(){
    playerTWoSelection = choices[Math.floor(Math.random()*choices.length)];
        return playerTWoSelection
}

//function to take player one and player twos selection and determine the victor of the contest.
function victoryCondition(a,b){
    // rock victory logic inculding score increment for the winner
    if (a === 'rock' && (b === 'lizard' || b === 'scissors')){
            alert('YOU WIN, '+ a + ' crushes ' + b+ '!');
            playerOneScore += 1;
    }
    if (b === 'rock' && (a === 'lizard' || a === 'scissors')){
            alert('YOU Loose, '+ b + ' crushes ' + a + '!');
            playerTwoScore += 1;
    }
    
    // paper victory logic inculding score increment for the winner
    if (a === 'paper' && (b === 'rock' || b === 'spock')){
        if (b === 'rock'){
            alert('YOU WIN, '+ a + ' covers ' + b+ '!');
            playerOneScore += 1;
        }
        else{
            alert('YOU WIN, '+ a + ' disproves ' + b+ '!');
            playerOneScore += 1;
        }
    }
    if (b === 'paper' && (a === 'rock' || a === 'spock')){
        if (a === 'rock'){
            alert('YOU Loose, '+ b + ' covers ' + a+ '!');
            playerTwoScore += 1;
        }
        else{
            alert('YOU Loose, '+ b + ' disproves ' + a+ '!');
            playerTwoScore += 1;
        }
    }

    // scissors victory logic inculding score increment for the winner
    if (a === 'scissors' && (b === 'paper' || b === 'lizard')){
        if (b === 'paper'){
            alert('YOU WIN, '+ a + ' cuts ' + b+ '!');
            playerOneScore += 1;
        }
        else{
            alert('YOU WIN, '+ a + ' decapitates ' + b+ '!');
            playerOneScore += 1;
        }
    }
    if (b === 'scissors' && (a === 'paper' || a === 'lizard')){
        if (a === 'paper'){
            alert('YOU Loose, '+ b + ' cuts ' + a+ '!');
            playerTwoScore += 1;
        }
        else{
            alert('YOU Loose, '+ b + ' decapitates ' + a+ '!');
            playerTwoScore += 1;
        }
    }

    // lizard victory logic inculding score increment for the winner
    if (a === 'lizard' && (b === 'paper' || b === 'spock')){
        if (b === 'paper'){
            alert('YOU WIN, '+ a + ' eats ' + b+ '!');
            playerOneScore += 1;
        }
        else{
            alert('YOU WIN, '+ a + ' poisons ' + b+ '!');
            playerOneScore += 1;
        }
    }
    if (b === 'lizard' && (a === 'paper' || a === 'spock')){
        if (a === 'paper'){
            alert('YOU Loose, '+ b + ' eats ' + a+ '!');
            playerTwoScore += 1;
        }
        else{
            alert('YOU Loose, '+ b + ' poisons ' + a+ '!');
            playerTwoScore += 1;
        }
    }

    // spock victory logic inculding score increment for the winner
    if (a === 'spock' && (b === 'rock' || b === 'scissors')){
        if (b === 'rock'){
            alert('YOU WIN, '+ a + ' vaporizes ' + b+ '!');
            playerOneScore += 1;
        }
        else{
            console.log('YOU WIN, '+ a + ' smashes ' + b+ '!');
            playerOneScore += 1;
        }
    }
    if (b === 'spock' && (a === 'rock' || a === 'scissors')){
        if (a === 'rock'){
            alert('YOU Loose, '+ b + ' vaporizes ' + a+ '!');
            playerTwoScore += 1;
        }
        else{
            alert('YOU Loose, '+ b + ' smashes ' + a+ '!'); 
            playerTwoScore += 1;
        }
    }
    // draw victory Condition
    else if (a === b){
        alert('This Contest is a Draw!')
    }
    
}

//announce the winner of the game
function contestWinner(scoreOne,scoreTwo){
    if (scoreOne == 5){
        alert('The contest has been decided, You were victorious!')
    }
    else{
        alert('You have suffered defeat, May Shame run down your spine!')
    }
}

//game loop that runs until either player one or player two scores 5 battle victories 
for (let i = 0; playerOneScore < 5 && playerTwoScore < 5; i++ ){
    
    //prompts user to enter their combat choice.     
    let playerOnePrompt = prompt('Choose your wisely','');
    playerOneSelection = playerOnePrompt.toLowerCase(playerOnePrompt);

    //Gets computers choice
    getComputerChoice();
       
    //compares players variables looping through win conditions
    victoryCondition(playerOneSelection,playerTWoSelection);
}
// annouces contestVictor after game loop completes
contestWinner(playerOneScore,playerTwoScore);

    