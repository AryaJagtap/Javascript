// syntax of while loop

// while (condition) {
    
// }

// while loop mai bas contition pahele hoti hai
// variable loop se pahele declare karna padta hai
// aur afterthough loop ke end mai likha jata hai 

///////////////////////////////////////////////////////////

let index = 0

while (index <= 10) {
    // console.log(`value of index is ${index}`);
    index = index + 2
}

//////////////////////////////////////////////////////

// for arrays

let myarr = ["flash", "superman", "batman"]

let arr = 0
while (arr < myarr.length) {
    console.log(`value is ${myarr[arr]}`);
    arr = arr + 1 // arr++ acn also be written as this
}

// code readable hona priority hai chota hona nahi

///////////////////////////////////////////////////////////////

// do while loop

// syntax

// do {
    
// } while (condition);

// do while loop mai pahele ek bar execution hota hai fir condition check hoti hai

////////////////////////////////////////////////////////////

let score = 1

do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);

///////////////////////////////////////////////////////////////////

let score1 = 11

do {
    console.log(`score is ${score}`);
    score1++
} while (score1 <= 10);

// yeha ek bar execute huva fir condition check hui issleya 11 print huva uske aage print nahi huva
