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
    return Math.floor(Math.random() * 100) + 1;//simple random number gnerated from 1 to 100  /// I have add +1 bcz number is generated from 0 t0 99 so adding +1 will give 1 to 100 number
}

const compChoice = genCompChoice(); // store the random no in compChoice

const choices = document.querySelectorAll('.number-box');// get all the boxes

///we have to use forEach bcz we have multiple boxes with number///for more information Read notes forEach from apna college
choices.forEach(choice => {
    ///event listner add kiya hmne when user click any number
    choice.addEventListener('click', () => {
        const userChoice = parseInt(choice.innerHTML, 10);///parseInt use kiya meine (from mdn obviusly) kyunki string ko number mein convert karne ke liye aur "10" use isiliya kiya radix(base) 10 means that string will be interpreted as a decimal number...for more information search Parseint ////
        
        playGames(userChoice,compChoice);// the choosen value of user and computer are pass down to playGames
        
    });
});///yess we got values of boxes in console // you can console.log(choices)😁



// main game descison making 


const playGames = (userChoice ,compChoice) =>{
    console.log(userChoice);
   
    console.log(compChoice);

    //1st condition when user correctly guessed the number
    if(userChoice === compChoice){
        inputBar.innerHTML = `Congratulations!`;///ths will change innerHtml of inputbar to "congrulation"
        hintBar.innerHTML = compChoice; // this will print the number which computer was guessed
        console.log(`Congratulations! You have guessed the right number in ${noOfGuess} attempts`);//simple console.log print statement
        inputBar.style.backgroundColor = 'rgb(92, 179, 56)';//change the color to green 
    }

    //2nd condition when user guessed higher the number then your guess is high will print
    
    else if(userChoice > compChoice){
        hintBar.innerHTML = `Your guess is high!`;
        console.log('Your guess is too high');
        inputBar.innerHTML = `Try Again!`;
        inputBar.style.backgroundColor = 'rgb(255, 41, 41)';
    }

    //3rd condition when user guessed lower the number then your guess is low will print

    else if(userChoice < compChoice){
        hintBar.innerHTML = `Your guess is low!`;
        console.log('Your guess is too low');
        inputBar.innerHTML = `Try Again!`;
        inputBar.style.backgroundColor = 'rgb(255, 41, 41)';
    }

    // score board
    noOfGuess++;//hr gueesed ke baad increment krdega no of guesses ko by +1
    
    turnTrack.innerHTML = `Turns: ${noOfGuess}`;///this will print noOfGueesed user taken
}
