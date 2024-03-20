// // generate a random color

function generateRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Construct the RGB color string
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}
/////////////////////////////////////////////////////////////////////////
// generate a random color

function randomcolor(){
    const hex ='0123456789ABCDEF'
    let color = '#'

    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// my code
let body = document.querySelector('body')
let settintervall;

let startbutton = document.querySelector('#start').addEventListener('click',function (){
    
   settintervall =  setInterval(function(){
    body.style.backgroundColor = generateRandomColor()
   }, 1000)
   console.log("printing started")
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(settintervall)
    body.style.backgroundColor = "#212121"
    console.log("printing stopped");
    settintervall = null
})
//////////////////////////////////////////////////////////////////////////

// code by hitesh
let intervalId;
const startChangingColor = function (){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000);
    }
    function changeBgColor (){
        document.body.style.backgroundColor = randomcolor();
    }
};
const stopChangingColor = function (){
    clearInterval(intervalId);
    intervalId =null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

/////////////////////////////////////////////////////////////////////////