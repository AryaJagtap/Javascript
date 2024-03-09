// primitive

//(1) primitives are the data types which are called by value. that is when you copy the data their reference is not given instead a copy is created and that copy is given to the user when it is called, also any changes made is made in the copy not in the original data.

// 7 types : string, numbers, boolean, bigint, symbol, null, undefined

// symbols are the data type which are used to make any value unique.
// bigint is all like number just big calculations or bigger values are taken in bigint

const score = 100
const scoreValue = 100.3

const loggedIn = false
const outsidetemp = null
let userEmail;

const Id = Symbol("123")
const anotherId = Symbol("123")

console.log(typeof Id);
console.log(Id === anotherId);
// even if the values are same in two symbols, they are unique and thats why they are not equal. and hence shows the output false.

const bignumber = 234567890987654345678n // use n in last to show that it is bigint
console.log(bignumber);

//(2) reference (non primitive )
// this are the datatypes whose reference is created in the memory.

// array , objects , functions


const heros = ["shaktiman" , "naagraj","doga"];  // arrays are declared in square brackets using commas to seperate them. 

{
    name : "arya"
    age : 20                          

}

// objects are always represented like this in key-value pair by using colen.
// objects ke ander another object bhi ho sakta hai , function bhi ho sakta hai , string bhi , number bhi, boolean, etc etc
// objects are also represented by giving a variable like below

let myobj = {
    name : "arya",
    age: 20,
}
console.log(typeof heros);

// function(){}  => this is the declaration of function.
// it can be stored(or declared) in a variable in the followings way

const myFunction = function(){
    console.log("Hello Arya");
}

console.log(typeof myFunction);


//NOTE//
/**dynamically typed language
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them. */

// when you typeof the non premitive datatypes
// all are called as functions but function data type is called as object-function
// arrays and objectives shows output as object while function shows function.

// link for study
// https://262.ecma-international.org/5.1/#sec-11.4.3