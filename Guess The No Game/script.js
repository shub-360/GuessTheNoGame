// **---- making number of boxes using loops ----**
const noBoxes = document.getElementsByClassName('number-box');
// Console.log(noBoxes);

const gridContainer = document.querySelector('.number-boxes-grid'); // Get the grid container

for ( let i = 2 ; i <= 100 ; i++){
    const box = document.createElement('div');
    box.textContent = i;
    box.setAttribute('class', 'number-box');//create a class for every number
    box.innerHTML = i;
    gridContainer.appendChild(box); // Append the box to the grid container
}
// **---- making number of boxes using loops ----**END
// **----Making Game Logic----**

let noOfGuess = 0;// to count the track of the number of attempts by user
let userChoice = 0;// user choice

const inputBar = document.querySelector('.input-bar');// get the input bar
const hintBar = document.querySelector('.hint-bar');// get the hint bar
const turnTrack = document.querySelector('.turn-track');// get the turn track

// This function generate random no 
const genCompChoice = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const compChoice = genCompChoice(); // store the random no in compChoice

const choices = document.querySelectorAll('.number-box');// get all the boxes
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = parseInt(choice.innerHTML, 10);///parseInt use kiya meine (from mdn obviusly) kyunki string ko number mein convert karne ke liye aur "10" use isiliya kiya radix(base) 10 means that string will be interpreted as a decimal number
        
        playGames(userChoice,compChoice);
        
    });
});///yess we got values of boxes in console


// main game descison making
const playGames = (userChoice ,compChoice) =>{
    console.log(userChoice);
   
    console.log(compChoice);
    
    if(userChoice === compChoice){
        inputBar.innerHTML = `Congratulations!`;
        hintBar.innerHTML = compChoice;
        console.log(`Congratulations! You have guessed the right number in ${noOfGuess} attempts`);
        inputBar.style.backgroundColor = 'rgb(92, 179, 56)';
    }
    else if(userChoice > compChoice){
        hintBar.innerHTML = `Your guess is high!`;
        console.log('Your guess is too high');
        inputBar.innerHTML = `Try Again!`;
        inputBar.style.backgroundColor = 'rgb(255, 41, 41)';
    }
    else if(userChoice < compChoice){
        hintBar.innerHTML = `Your guess is low!`;
        console.log('Your guess is too low');
        inputBar.innerHTML = `Try Again!`;
        inputBar.style.backgroundColor = 'rgb(255, 41, 41)';
    }

    // score board
    noOfGuess++;//increment krdega no of guesses ko by +1
    
    turnTrack.innerHTML = `Turns: ${noOfGuess}`;
}
