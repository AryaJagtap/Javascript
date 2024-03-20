function generateRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Construct the RGB color string
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let body = document.querySelector('body')
let settintervall;

let startbutton = document.querySelector('#start').addEventListener('click',function (){
    body.style.background
   settintervall =  setInterval(function(){
    body.style.backgroundColor = generateRandomColor()
   }, 1000)
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(settintervall)
    body.style.backgroundColor = "#212121"
})
