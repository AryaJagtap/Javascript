# projects related to Dom

## PROJECT LIK 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1 solution

```javascript

const buttons = document.querySelectorAll('.button')
// console.log(buttons);
// const body = document.body
const body = document.querySelector('body')
console.log(body);

buttons.forEach( function (button) {
    console.log(button)
    button.addEventListener('click', function(superman){
        console.log(superman);
        console.log(superman.target);
        // if (superman.target.id === 'grey') {
        //     body.style.backgroundColor = superman.target.id;
        // }
        // if (superman.target.id === 'white') {
        //     body.style.backgroundColor = superman.target.id;
        // }
        // if (superman.target.id === 'blue') {
        //     body.style.backgroundColor = superman.target.id;
        // }
        // if (superman.target.id === 'yellow') {
        //     body.style.backgroundColor = superman.target.id;
        // }


                    //  also can be done with switch


        switch (superman.target.id) {

            case 'red':
                body.style.backgroundColor = superman.target.id
                break;
            case 'orange':
                body.style.backgroundColor = superman.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = superman.target.id
                break;
            case 'green':
                body.style.backgroundColor = superman.target.id
                break;
            case 'blue':
                body.style.backgroundColor = superman.target.id
                break;
            case 'indigo':
                body.style.backgroundColor = superman.target.id
                break;
            case 'purple':
                body.style.backgroundColor = superman.target.id
        
            default:
                
                break;
        }
    })
})
```

## project 2 solution

```javascript

const form = document.querySelector('form')
form.addEventListener('submit' , function(variable){
    variable.preventDefault()
    const finalheight = parseInt(height.value)
    const finalweight = parseInt(weight.value)

    if (finalheight === "" || finalheight < 0 || isNaN(finalheight)) {
        result.innerHTML =  `Please give valid height ${finalheight}`
    }else if (finalweight === "" || finalweight < 0 || isNaN(finalweight)) {
        result.innerHTML =  `Please give valid height ${finalweight}`
    } else {
       const bmi = (finalweight / ((finalheight*finalheight)/ 10000)).toFixed(2)
       
        // show the result

        switch(bmi) {
            case 1: bmi <= 18.6
                console.log("you are under weight");
                break;
            case 2: 18.6 < bmi <= 24.9
                console.log(" your bmi is normal");
                break;
            case 3: bmi > 24.9
                console.log("you are overweight");
                break;
        
            default:
                console.log("enter valid number");
                break;
        }

        result.innerHTML= `<span>${bmi}</span>`

        
    }
})

```

## project 3 solution

```javascript

const clock = document.getElementById('clock')

setInterval(function (){
    let date = new Date();
   clock.innerHTML = date.toLocaleTimeString();
} , 1000);

```

## project 4 solution

```javascript

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
        validateguess(guess)
    })
}

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

function displayguess (guess){ 
    receivedinput.value = ''
    allguesses.innerHTML += `${guess}  `
    numguess++
    remainingguesses.innerHTML = `${11-numguess}` 
}

function displaymessage (message){
   lowhigh.innerHTML = `<h2>${message}</h2>`
}

function endgame (guess){
    receivedinput.value = ''
    receivedinput.setAttribute('disabled', '') 
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

```