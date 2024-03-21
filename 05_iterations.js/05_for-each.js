// for each loop
// for each is higher order function

const programming = ["js","cpp","ruby","java"]

// programming.forEach(element => console.log(element), {if (element = "ruby") {
//     console.log("hello its ruby");
// }});

// call back function ko name nahi hota hai
// function se name hatadene pe function call back function ban jata hai

// normal function
programming.forEach( function (val) {
    console.log(val);
} )

// kyu ki ye function array ke andeer chal raha hai issleya ye parameter apne aap value leke aa jayega 
// usko value boleyea val boleya ya item boleya jo bolna hia boleyea
// hame khud se koi parameter nahi dena padega because array ke elements hi apne aap parameters banke aa jayenge 

//////////////////////////////////////////////////////////////////

// arrow function mai for each
programming.forEach ( (item) => {
    console.log(item);
})

///////////////////////////////////////////////////

function printme (variable) {
    console.log(variable);
}
programming.forEach(printme)

// kabhi kabhi aisa bhi ho sakta hai ki function kahi pe to banake rakha tha aur abhi usko loop mai use karna pad raha hai... to uss banaye huve function ka naam call karke bhi usko loop mai execute kiya ja sakta hai ..... for eg yeha pe printme ye ek reference dala hai console.log mai aur loop execute ho gaya..

/////////////////////////////////////////////////////////////

// hamesha jaruri nahi hai ki parameter hamesha item hi leke aata hai..foreach ke pass aur bhi cheeze hoti hai, jaise ki index aur pura array
// item, index, array

programming.forEach( (item, index,arr) => {
    console.log(item,index,arr);
})

//////////////////////////////////////////////////////////////////////

const mycoding = [
    {
        languagename : "java",
        languagefile : "java"
    },
    {
        languagename : "javascript",
        languagefile : "js"
    },
    {
        languagename : "python",
        languagefile : "py"
    }
]

// mycoding.forEach( (item) =>  {
//     // {}    ===> yeha har object ko item bola hai issleya object.innerobject ko yeha par item.languagename bola gaya hai
//     console.log(item.languagename);
// })

mycoding.forEach( (item) =>  {

    console.log(item.languagename);
})

/////////////////////////////////////////////////////////////////////////