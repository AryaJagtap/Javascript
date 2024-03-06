// > - greater than
// < - smaller than
// == - equality check
// <= - smaller than equal to
// >= - greater than equal to 
// != - not equal
// === strict check . strict check not only checks the value but also checks for typeof the data.
console.log("2" === 2); // false. since it is string and number
console.log(2 === 2); // true 


// 1. BETWEEN STRINGS
console.log("2" > 1);
console.log("02" > 1);

// 2. BETWEEN NUMBERS
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 = 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
console.log(2 < 1);

// 3. BETWEEN NULL 
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// 4. BETWEEN UNDEFINED 
console.log(undefined = 0);
console.log(undefined > 0);
console.log(undefined < 0);

// The reason is that an empty check == and comparison > < >= =< work differently
// comparisos convert null to a number , treating it as 0.
// thats why (3) null >= 0 is true and (1) null >0 is false.



