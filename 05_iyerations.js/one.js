// Loops

// For Loop

// conditional check

// for (let index = 0; index <= 10 ; index++) {
//     const element = index;
//     console.log(element);
    
// }

// flow of for loop 
// 1) (let index = 0;) this is variable decleration or initialization
// 2) (index < array.length;) this is condition check 
// 4) {} executes code inside braces
// 3) (index++) this is afterthought




// 
// here there is one variable index whose value is declared as 0
// then (index < 10 ;) this is conditional check where condition is check wether the value of index is less than 10 or not
// if it is less than 10 then it enters in the loop 
//  const element = index;
//  console.log(element);
// executes this lines and before the end of block scope {} it goes to ( index++)

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    console.log(element);
    
}
// console.log(element); // element cannot be accessed outside the loop
///////////////////////////////////////////////////////////////////////////////////////

// loop ke ander conditional statement
for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if (element == 5) {
       // console.log("5 is best number");
    }
   // console.log(element);
    
}
/////////////////////////////////////////////////////////////////////////////////

// loop ke ander loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(`Outer loop value ${i}`);
    

}
