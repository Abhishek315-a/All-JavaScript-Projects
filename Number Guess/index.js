let rand = Math.floor(Math.random() * 100 + 1);
let prevGuess = [];
let numGuess = 1;
let button = document.querySelector(".guessSubmit");
let input = document.querySelector("#guessField");
let lowOrHi = document.querySelector(".lowOrHi");
let prev = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let resultParas = document.querySelector(".resultParas");
let p = document.createElement("p")

let playGame = true;
if (playGame) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(input.value);
    // console.log(guess)
    validateGuess(guess);
  });
}
function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess>100 && guess<1){
        alert("Please enter number between 1 and 100")
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${rand}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess===rand){
        displayMessage(`You guessed it right`)
    }
    else if(guess<rand){
        displayMessage(`Number is too low`)
    }
    else{
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    input.value="";
    prev.innerHTML += `${guess} , `
    numGuess++;
    lastResult.innerHTML = `${11-numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
    input.value="";
    input.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    resultParas.appendChild(p)
    playGame=false
    newGame()
}

function newGame() {
    const newGamebtn = document.querySelector("#newGame")
    newGamebtn.addEventListener("click",function(){
        rand = Math.floor(Math.random() * 100 + 1);
        prevGuess=[]
        numGuess=1
        lowOrHi.innerHTML=""
        lastResult.innerHTML= `${11-numGuess}`
        input.removeAttribute("disabled")
        prev.innerHTML=""
        resultParas.removeChild(p)
        playGame=true
    })
}
