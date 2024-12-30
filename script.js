const p = document.querySelector(".result-p");
const inputBox = document.querySelector(".inputbox")
const guessButton = document.querySelector(".guess")
const attempts1 = document.querySelector(".attempt")

let max = 100
let min = 1

let attempts = 1


let randomNumber = (Math.round(Math.random() * max + 1) - 1)


guessButton.addEventListener('click', function(){

    let guessNumber = inputBox.value;
    let Att = attempts++
    
    if (guessNumber == randomNumber) {
        p.innerHTML = "Congratulations! you guessed the number"
        attempts1.innerHTML = `In ${Att} attempts`
        inputBox.style.backgroundColor = "lightgreen"
    }
    else if(guessNumber > randomNumber){
        p.innerHTML = "Try Again! The number you guessed is too high."
        attempts1.innerHTML = `attempts: ${Att}`
        inputBox.style.backgroundColor = "tomato"
    }
    else if(guessNumber < randomNumber){
        p.innerHTML = "Try Again! The number you guessed is too low."
        attempts1.innerHTML = `attempts: ${Att}`
        inputBox.style.backgroundColor = "tomato"
    } 
});

