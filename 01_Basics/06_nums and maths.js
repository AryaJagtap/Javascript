const score = 1000
console.log(score);
console.log(typeof score);
console.log(score.length); //  here ,length property of string cannot be used as it is a number

const balance = new Number(500)  // number can be declared like this also but it will give output as object
console.log(balance);
console.log(typeof balance); // output as object ?? meko bhi nahi pata

let apple = balance.toString(); // to change into string
console.log(apple.length); // here .length propeerty can be uased as it has changed into string
console.log(typeof apple);

console.log(balance.toFixed(2));

const num = 98.5682
console.log(num.toPrecision(2)); // precision makes the (declared no.) value as precise

const num1 = 9865838
console.log(num1.toLocaleString()); // this is based on default us standards
console.log(num1.toLocaleString('en-In')); // this is based on indian standards

// MIN_VALUE
//MAX_VALUE
//MIN_SAFE_VALUE
//MAX_SAFE_VALUE
//more methods are there explore them on console and read them from mdn for understandation

//+++++++++++++++++++++++++++=Maths++++++++++++++++++++++++++++++++++++++++

console.log(Math); // on browser this command will show all methods available for math
console.log(Math.abs(-20));
console.log(Math.round(4.6));
console.log(Math.ceil(6.44));
console.log(Math.floor(9.5));
console.log(Math.min(5,-7,2,9));
console.log(Math.max(4,7,9,5));

console.log(Math.random()); // math.random ki value hamesha 0 se 1 ke beech mai ayegi

console.log(Math.random()*10); // to get value from 0 to 9 we multiply be 10
console.log((Math.random()*10) + 1); // to avoid getting 0 we add 1

const min = 50
const max = 100

// formula = Math.floor(Math.random() * (max - min + 1) + min )
console.log(Math.floor(Math.random() * (max - min + 1) + min ));



