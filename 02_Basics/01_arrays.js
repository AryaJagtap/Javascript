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
// include - to check wether the given parameter is there or not in the array ----gives ans in boolean true or false
//indexof - to check what is the index number of the parameter passed element, if index number does not exist it will show -1 i.e false (or does not exist)
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

// let a = heroes.slice(1,4)
// console.log(a)

// // example from mdn
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// const numbers = [10,20,30,40,50,60,70,80,90,100]

// console.log(numbers.length); // .length is the property not method i.e () is not at the end
// console.log(numbers.indexOf(50));

// console.log(numbers.includes(100));
// console.log(numbers.includes(150));

// SLICE

// SYNTAX :
//   slice()
//   slice(start)
//   slice(start, end)

// console.log(numbers.slice(2,7)); // count the given start number(2 is included) but does not includes last number(7th element is not included)
// console.log(numbers.slice(5)); // when single number is entered it gives output from that element which is entered till the last element (5th element to last element)
// console.log(numbers.slice(-4, 7)); // same line two positive numbers. count the given start number(-4 is included) but does not includes last number(7th element is not included). negative counting is done from end of the array....i.e last element -1, second last -2, etc, etc...
// console.log(numbers.slice(-3 , 2)); // if the starting element is ahead of ending element then the array shows empty 
// console.log(numbers.slice(2, -3));  // same line two positive numbers. count the given start number(2 is included) but does not includes last number(-3th element is not included). negative counting is done from end of the array....i.e last element -1, second last -2, etc, etc...
// console.log(numbers.slice(4, -2));  // same line two positive numbers. count the given start number(4 is included) but does not includes last number(-2th element is not included). negative counting is done from end of the array....i.e last element -1, second last -2, etc, etc...
// console.log(numbers.slice(-5, -8)); // if the starting element is ahead of ending element then the array shows empty 
// console.log(numbers.slice(-9 , -2)); // same line two positive numbers. count the given start number(-9 is included) but does not includes last number(-2th element is not included). negative counting is done from end of the array....i.e last element -1, second last -2, etc, etc...
// console.log(numbers.slice(-7));// when single number is entered it gives output from that element which is entered till the last element (-7th element to last element)

// // is the starting element and ending element is same then it gives empty array
// console.log(numbers.slice(4,-6)); // is the starting element and ending element is same then it gives empty array
// console.log(numbers.slice(4,4));

// SPLICE

// SYNTAX:
//    splice(start)
//    splice(start, deleteCount)
//    splice(start, deleteCount, item1)
//    splice(start, deleteCount, item1, item2)
//    splice(start, deleteCount, item1, item2, /* …, */ itemN)


// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it.


const alphabects = ["a","b","c","d" ,"e", "f", "g", "h" ,"i","j",]
// console.log(alphabects.length);

// //    splice(start)
// console.log(alphabects.splice(4));

// //    splice(start, deleteCount)
alphabects.splice(4, 8, "jethalal")
console.log(alphabects);

// //    splice(start, deleteCount, item1)
// console.log(alphabects.splice(4));

// //    splice(start, deleteCount, item1, item2)
// console.log(alphabects.splice(4));

// //    splice(start, deleteCount, item1, item2, /* …, */ itemN)
// console.log(alphabects.splice(4));


/**
 *        SPLICE NOT YET UNDERSTOOD PROPERLY
 *            NEED TO PRACTISE MORE ON 
 *                    SPLICE
 * 
 */



// const newarr = alphabects.join() // converts array into string

// console.log(alphabects);
// console.log(newarr);
// console.log(typeof newarr);