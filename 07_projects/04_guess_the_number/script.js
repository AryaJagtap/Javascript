const form              = document.querySelector('.form')
const resultparas       = document.querySelector('.resltParas')
const allguesses        = document.querySelector('.guesses')
const remainingguesses  = document.querySelector('.lastResult')
const lowhigh           = document.querySelector('#lowhigh')
const receivedinput     = document.querySelector('#guessField')
const submitbutton      = document.querySelector('#subt')

let randomNumber      = Math.round((Math.random() * 100 + 1))
const div               = document.createElement('div')
let prevGuess = []
let numguess = 1
let playGame = true

// code logic

if (playGame) {
    submitbutton.addEventListener('click',function (event){
        event.preventDefault()
        const guess = parseInt(receivedinput.value)
        // console.log(guess); // to check eventlistner working or not
        validateguess(guess)
    })
}
// to check wether the guess number is valid or not // Imp //
function validateguess (guess){
    if (isNaN(guess)) {
        alert("please enter valid number")
    } else if (guess < 1) {
        alert("please enter number more than 1")
    } else if (guess > 100) {
        alert("please enter number less than 100")
    } else {
        prevGuess.push(guess)
        if (numguess === 11) {
            displayguess(guess)
            displaymessage(`game over, random number was ${randomNumber}`)
            endgame()
        } else {
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess (guess){
    if (guess === randomNumber) {
        displaymessage('your guessed right')
        endgame()
    } else if (guess < randomNumber) {
        displaymessage('number is too low')
    } else if (guess > randomNumber) {
        displaymessage('number is too high')
    }
}

function displayguess (guess){ // display guess nahi samjha
    receivedinput.value = ''
    allguesses.innerHTML += `${guess}  ` // nahi samjha
    numguess++
    remainingguesses.innerHTML = `${11-numguess}` // nahi samjha
}

function displaymessage (message){
   lowhigh.innerHTML = `<h2>${message}</h2>`
}

function endgame (guess){
    receivedinput.value = ''
    receivedinput.setAttribute('disabled', '') // disables attribute hamesha key value pair mai set hota hai
    div.classList.add('button')
    div.innerHTML = `<h3 id = "newgame"> start new game</h3>`
    resultparas.appendChild(div)
    playGame = false
    newgame()
}
function newgame (guess){
   const newgamebutton = document.querySelector('#newgame')
   newgamebutton.addEventListener('click', function (params) {
        randomNumber = Math.round((Math.random() * 100 + 1))
        prevGuess = []
        numguess = 1
        allguesses.innerHTML = ''
        remainingguesses.innerHTML = `${11-numguess}`
        receivedinput.removeAttribute('disabled')
        resultparas.removeChild(div)
        playGame = true
    
   })
}

