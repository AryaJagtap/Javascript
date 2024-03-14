// control flow or logic flow

// if
//syntax

// if (condition) {
    
// }

// //////////////////////////////////////////////////////////////////////////

// const isuserloggedin = true

// if (isuserloggedin) {
//     // only condition true hone ke baad hi ye braces ke ander la code execute hota hai
// }

// if (false) {
//     // abhi braces ke ander ka code execute nahi hoga becuase condiotn false hai

// }
// /////////////////////////////////////////////////////////////////////////////

// < , > , <= , >= , == , != not equal ,=== , !==
// = this is assignment operator...kisi ko bhi value dene ke leya i.e assign karne ke leya use hota hai
// == this is equality check operator ...koi bhi value equal hai ki nahi ye check karne ke leya use hota hai
// === this is strict equality... ye koi bhi value equal hai ki nahi check karne ke sath sath dono same data type hai ki nahi ye bhi check karta hai

// if (2 !== 3) {
//     console.log("hello");
// }

// const temperature = 41

// if (temperature < 50) {
//     console.log("temperature is less than 50");
// }
// console.log("temperature is more than 50");

// here both the statements gets executed 
// but if we want to execute only one according to conditon then we use if else
/////////////////////////////////////////////////////////////////////////////

// if else

// if (temperature === 41) {
//     console.log("temperature is less than 50");
    
// } else {
//     console.log("temperature is more than 50");
    
// }

//////////////////////////////////////////////////////////////////////
const score = 200

if (score>100) {
    const power = "fly"
    // console.log(`user power: ${power}`);
    
}
// console.log(`user power: ${power}`);  scope ke bahar nahi use kar sakte

///////////////////////////////////////////////////////////////////////

// short hand notation

const balance = 1000
// if (balance > 500) console.log("test"); // this is implicit scope // only use if there is only one line 

// // below things are executabe but are not recommended as the are not readable and looks immature
// if (balance > 500) console.log("test"), console.log("test2"); 
// if (balance > 500) console.log("test"),
// console.log("test2"); 

////////////////////////////////////////////////////////////////////////

// nesting

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if (userloggedin && debitcard && 2==2 ){
    console.log("allowed to buy courses");
}

// && and conditon = and ka matlab sari true honi chayea
// || or conditon = or matlab ek bhi true ho to bhi chalega

if (loggedinfromgoogle || loggedinfromemail ) {
    console.log(" user logged in");
}