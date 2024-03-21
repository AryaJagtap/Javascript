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
    // console.log(element);
    
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
    // console.log(`Outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        const element = j;
        // console.log(`inner loop value ${j} and inner loop is ${i} `);
        
    }

}

// table printing 
for (let i = 1; i <= 10; i++) {
    const element = i;
    // console.log(`next table is of ${i}`);

    for (let j = 1; j <= 10; j++) {
        const element = j;
        // console.log (`${ i } * ${ j } = `,  i * j);
    }
}

// for arrays
const myarray = ["flash" , "superman" , "batman"]
// console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}

// as areray starts from 0 there fore no <= is required and thus only < sign is used

// index ++    // yeha pe condition change hoti hai.. and this is very important. 
// agar index++ ke jage bas index hoga to loop chalte hi jayega and it wont end 

/////////////////////////////////////////////////////////////////

// break and continue
// to break any control flow "break" is used

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("detected 5");
//         break
//     }
//     console.log(` value of i is ${index}`);
    
// }

/////////////////////////////////////////////////////////

//continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("detected 5");
        continue
    }
    // console.log(` value of i is ${index}`);
    
}


// continue ek bar aage ke code ko skip karta hai 
// jaise yeha pe aage wala console.log(` value of i is ${index}`); skip kiya aur wapas upar chala gaya

////////////////////////////////////////////////////////////////////////








