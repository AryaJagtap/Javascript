// math.pi ki vaue hai 3.14... something
// kya math.pi ki value ko 3 ya fir 4 kar sakte hai??
// agar ha karsakte hai to kaise?? aur agar nahi akr sakte to kyu nahi kar sakte??



console.log(Math.PI);
Math.PI = 5 
console.log(Math.PI);

// here Math.PI ki value rewrite nahi ho rahi.... aisa kyu??

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
//////or/////
// console.log(Object.getOwnPropertyDescriptor(Math, "PI")); 

// getowndescriptor ye ek method hai jo indepth kuch hidden properties ko dekhne mai madat karta hai
// jis module ki property janni hai usko pahele likhte hai... fir jo property ke bare mai janna hai usko comma ke bad likhte hai... yeha ,PI ke bare mai janna hai issleya PI ko inverted commas mai likha hai.. double inverted ya singleinverted dono mai se koi bhi chalenge



// this will be the output for the above code
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

  /*
    here value is been fixed for pi
    writable has been disabled so that no one can change it
    enumerable and configurable are also made false
    all this things are made false in deep js code using c anc c++ codes so that no one can change their values..

   */

// we cannot change the value of math.pi

// Object.defineProperty(Math,"PI", {

//     writable: true,
//     enumerable: true,
//     configurable: true
// })

// Object.getOwnPropertyDescriptor(Math, "PI") // cannot redefine property pi


    // so we can also make our own libraries where we want that no one can change our code??

    // yess

const chai = {
    name : 'ginger chai',
    price : 250 , 
    isAvailable : true,

    // problem aati hai jab object ke ander function jaisa kuch ho

    orderChai : function () {
        console.log("chai nahi bani , code fat gaya");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


Object.defineProperty(chai, 'name' , {
    writable : false,
    enumerable : false , 
    configurable : false 
})


console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// for (const [key , values] of chai) {
    
// }
// this wont work

for (let [key , value] of Object.entries(chai)) {

    // to avoid function problems we check the conditions useinf if or ifelse statements

    if (typeof value !== 'function') {
        console.log(key , value);
    }

    // conditions checks dene ke baad function iteration ke beech nahi ayega
}
///////////////////////////////////////////////////////////////////////////

let heroes = {
    thor : "hammer",
    age : 1000,
    canfly : true
}

console.log(heroes);

console.log(Object.getOwnPropertyDescriptor(heroes, 'thor')); 
console.log(Object.getOwnPropertyDescriptor(heroes, 'age')); 
console.log(Object.getOwnPropertyDescriptor(heroes, 'canfly')); 

Object.defineProperties(heroes , {
    // thor : {
    //     writable : false,
    //     enumerable : false,
    //     configurable : false
    // } ,

    age : {
        writable : false,
        enumerable : false,
        configurable : false
    },

    canfly : {
        writable : false,
        enumerable : false,
        configurable : false
    }
})

console.log(Object.getOwnPropertyDescriptor(heroes, 'thor')); 
console.log(Object.getOwnPropertyDescriptor(heroes, 'age')); 
console.log(Object.getOwnPropertyDescriptor(heroes, 'canfly'));

// values are changable
console.log(heroes.thor);
heroes.thor = "ironman"
console.log(heroes.thor);


// values are not changable
console.log(heroes.age);
heroes.age = 2000
console.log(heroes.age);


// https://www.youtube.com/watch?v=jss2rL9kv6s&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=47&ab_channel=ChaiaurCode