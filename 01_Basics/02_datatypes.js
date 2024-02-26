"use strict"      // after writing this line at the top of code this will treat all JS code written below as newer version

// alert ( 3 + 3)  // we are using nodejs, not browser.(for nodejs there is another method that we will learn further) on browser this will show alert popup notification 

console.log(3 
    +                // this will give the output correctly...but it is not recommended..
    3);              // code readability should be high

    let name = "arya"         // string
    let age = 20            // number
    let isloggedin = true  // boolean

    // premitive data types //
// number    =>  memory size 2 to power 53
// bigint
// string    => ""  // can be used in single quotes and double quotes ...but recommended to use double quotes
// booolean  => true / false
// null      => standalone value 
// undefined => 
// symbol    => used to find uniqueness
// zero(0) is different and null is different and undefined is different

/* 
   zero is a value which is zero 
   null is something which is nothing that means which is not there
   undefined means something is there but it is not given its value yet, means it is not yet defined..but it is there
*/



// object
// typeof => it is a data type which is used to find the type of another data types
console.log(typeof "arya"); // gives output as string
console.log(typeof "arya", typeof 100); //gives output as string number
console.log(typeof ["arya", 35]); // gives output as object
console.log(typeof null); // gives object // somepeople says it is an error of the language
console.log(typeof undefined); // gives output as undefined