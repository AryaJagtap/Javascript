const useremail = "arya@ai"

if (useremail) {
    console.log("got user email");
}else {
    console.log("dont have user email");
}

// truthy means that we assume the value is true
// falsey means that we assume the value is false

// falsy values = false , 0 , -0 , BigInt ke ander 0n, "" , null, undefined , NaN

// truthy value = falsy values ko chod kar baki sab truthy values hai
// some surprising truthy values

// "0"                0 in string
// "false"           false in string
//  " "               space in string
// []                 empty array
// {}                 empty object
// function (){}      empty function


// all this is true
false == 0
false == ""
0 == ""


/////////////////////////////////////////////////////////////////////////


const user_mail = []
if (user_mail.length ===0) {
    console.log("array is empty");
}
// this is how to check wether the given array is empty or not

// how to check object is empty or not
const emptyobj = {}

if (Object.keys(emptyobj).length===0) {
    console.log("object is empty");
}

// Object.keys(emptyobj) ye pura cheeze array return karta hai...issleya uske aage . lagane ke baad arrays ki properties access kar sakte hai,that is .length use karke array ki length check kar sakte hai agar array empty return huva iska matlab object empty hai
// Object.keys(emptyobj).length

/////////////////////////////////////////////////////////////////////////

// Nullish Coalescing Operator (??) : everything based on null and undefined

let value;
value = 5 ?? 10
console.log(value);

let value2;
value2 = null ?? 10
console.log(value2);

// abhi to yeha pe 10hai lekin yeha 10 nahi hota hai yeha pe complex function hota hai jisko database call kar raha hai , waha se value aa rahi hai, agar value ayi to theak hai nahi to null asiign kar dete hai aur aage ka calculation carry hota hai

let value3;
value3 = undefined ?? 15
console.log(value3);

let value4;
value4 = null ?? 10 ?? 20
console.log(value4);

// nullish coalescing operator hamesha null ke baad 1st aayi hui value ko hi accept karega

// apke project mai null ya undefined hona accha nahi hota...kyu ki uske karan pata nahi chalta ki value kaise ya kaha se aayi hai...
//issleya unki jaga koi flag value daal dena 
// flag value means true or false

////////////////////////////////////////////////////////////////////

// terniary operator (?)

// syntax
// condition ? true : false

const iceteaprice = 100

iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80");

// iss se ek hi line mai code execute kar sakte hai if else ka

