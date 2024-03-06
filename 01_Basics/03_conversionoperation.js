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

