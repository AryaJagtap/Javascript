// Arrays

// () this are parenthesies
// [] this are brackets
// {} this are braces

// link for study 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// NOTE : 
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const myarr = [0, 1, 2, 3, 4, 5]      // type 1
const heroes = ["shaktiman", "naagraj", "VIKRAM" ,"BEEtal" , "ashOKA" ]

const myarr2 = new Array(10, 20, 30 ,40, 50) // type 2
// array can be declared in this two types..

// console.log(myarr[3]);
// console.log(heroes[0]);
// console.log( myarr);
// console.log( myarr2);
// console.log( heroes);

// Array Methods..

// push - adds the element at the end of the array
//pop - removes the last element from the array
//unshift - adds the element to the start of the array
//shift removes the element from the start of the array
//slice 
//splice

// heroes.push(10)
// console.log(heroes);

// heroes.pop()
// console.log(heroes);
// heroes.pop()
// console.log(heroes);
// to do any methods on array first declare them and then use console.log()
// directly declaration in console.log() will not give correct ans

// console.log([myarr + heroes]);
// console.log(typeof [myarr + heroes]);


// console.log(myarr + heroes);
// console.log(typeof (myarr + heroes));

// heroes.unshift(50)
// console.log(heroes);

// heroes.shift()
// console.log(heroes);

let a = heroes.slice(1,4)
console.log(a)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]