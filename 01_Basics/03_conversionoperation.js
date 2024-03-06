/*
1.CONVERSION TO NUMBER

//string
let score = "33"

// two methods to check type of
console.log(typeof score);
console.log(typeof (score));

//string to number
let score2 = "33"
let valueinnumber = Number(score2)   // to convert string into number use Number() and pass the variable in the parenthesis i.e brackets (). NOTE 'N' IN Number Shoule be capital
console.log(typeof valueinnumber);
console.log(valueinnumber);

//string to number (NaN)             // NaN = Not a Number 
let score3 = "33abc@#$%^&"
let valueinnumber2 = Number(score3)
console.log(typeof valueinnumber2);
console.log(valueinnumber2);

// javascript converts the string into a number but at display it shows NaN if the converted string is not a pure number.
// pure number = 1 2 3 4 5
// impure number = 1 2 3 f g j @ # ! 

// null
let hahaha = null
console.log(hahaha);
console.log(typeof hahaha);

let abcd = Number(hahaha)
console.log(abcd);
console.log(typeof abcd);

// undefined
let hehe = undefined
console.log(hehe);
console.log(typeof hehe);

let kuchbhi = Number(hehe)
console.log(kuchbhi);
console.log(typeof kuchbhi);

let boolean = true
console.log(boolean);
console.log(typeof boolean);

let numboolean = Number(boolean)
console.log(typeof numboolean);
console.log(numboolean);


2.CONVERSION TO BOOLEAN

let a = {}
console.log(typeof a);
console.log(a);

let booleanA = Boolean(a)
console.log(typeof booleanA);
console.log(booleanA);


 1 = true
 10 = true
 0 = false
 null = false
 string = true
 undefined = false 
 "" = false
 [] {} <= object = true 

 3. CONVERSION TO STRING
 

 let a = []
 console.log(typeof a);
 console.log(a);
 
 let booleanA = String(a)
 console.log(typeof booleanA);
 console.log(booleanA);

 
  * true / false = true / false
  * null = null
  * undefined = undefined
  */

 //**********************************OPERATIONS*****************************************/

// let value = 3
// let negvalue = -value
// console.log(negvalue);

// console.log( 2 + 2 );
// console.log( 2 - 2 );
// console.log( 2 / 2 );
// console.log( 2 % 2 );
// console.log( 2 * 2 );
// console.log( 2 ** 3 ); // it is written as 2 raise to 3

// let str1 = "hello "
// let str2 = "arya"
// str3 = str1 + str2
// console.log(str3);

// console.log( "1" +  2 );
// console.log( 1   + "2"  + 3 );
// console.log( "1" +  2   + 2   );
// console.log( 1   +  2   + "2" );

// // when string is first and numbers are later on then the js convertes the later numbers (objects/elements) into string.
// // if numbers are 1st and then there is a string then the js converts the string into numbers
// // jo pahela rahega usme js next element ko convert karega.
// // link to study
// //https://tc39.es/ecma262/#sec-type-conversion

// console.log(3 + 4 * 5 % 3 ); //  this messey code is not recommended
// console.log((3 + 4) * 5 % 3 );  // use brackets to look proper

// console.log(true); // output will be true
// console.log(+true); // output will be 1 // not recommended
// console.log(+""); // output = 0   // not recommended


// let num1 , num2 , num3 
// num1 = num2 = num3 = 2 + 2 
// //again not recommended.
// // readability should be there in code

// let gamecounter = 100
// ++gamecounter  // precedence operator prefix
// gamecounter++  // precedence operator postfix
// console.log(gamecounter);
// // link to study
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
