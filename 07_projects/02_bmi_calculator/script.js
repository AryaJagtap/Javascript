
// my try
// const form   = document.querySelector('form')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const result = document.querySelector('#results')

// const button = document.querySelector('button')

// if (height !== "" || height >= 0 || isNaN(height)) {
//     button.addEventListener(onclick,)
// } else {
    
// }

////////////////////////////////////////////////////////////////////////

const form = document.querySelector('form')
// form jab bhi submit hota hai wo do type se submit hota hai, ek to post type se ya fir get type se
// lekin jab bhi submit hota hai uski values url ya to server ke pass chali jati hai usko hame rokna padega kyu ki hum server pe to bhej nahi rahe, to jo bhi default action hai form ka wo rok le yehi pe 
// wo rokne ke leya ek event mai ek method milta hai // submit event

// add event listner hamesha ek value leta hai aur ek callback function leta hai parameters mai
form.addEventListener('submit' , function(variable){
    variable.preventDefault()// prevent default is used to not submit the data , and hold the default data to record them

    // abhi value select karo
    // agar .value yeha likha to data(height aur weight) input karne ke baad jo input kiya hai wo yeha pe record hoga
    // agar .value eventlistner ke upar likhte to jab page load hota hai aur tav values 0 hote hai wo empty values record ho jate
    const finalheight = parseInt(height.value)
    const finalweight = parseInt(weight.value)

    if (finalheight === "" || finalheight < 0 || isNaN(finalheight)) {
        result.innerHTML =  `Please give valid height ${finalheight}`
    }else if (finalweight === "" || finalweight < 0 || isNaN(finalweight)) {
        result.innerHTML =  `Please give valid height ${finalweight}`
    } else {
       const bmi = (finalweight / ((finalheight*finalheight)/ 10000)).toFixed(2)
        // formula of body mass index is
        // weight / (height*height) / 10000
        //.tofixed(2) is used to get the answer only upto 2 decimal points

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