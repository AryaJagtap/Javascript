// global scope
// block scope
// node scope 8.45 time 

var c =300
let a = 300

if (true) {
    let   a = 10
    const b = 20
    //var   c = 30
   // console.log("inner:", a);
}



// console.log(a);
// console.log(b);
// console.log(c);

// var pure code mai kahi pe bhi bulaya to aata jai par const aur let agar braces ke ander define kiya to wo braces ke bahar nahi aate


// browser mai core scope alag hai aur jab aap code environment mai  node ke through scope check karenge to wo global scope alag hai

// global scope mai declare kiye huvi value block scope ke ander access ki ja sakti hai..par block scope mai declare kiye huve value global scope mai nahi access ki ja sakti ...

// nested functon mai child function parent ke variables ko access kar sakta hai but parent function cannot access child variables

function one (){
    const username = "arya"

    function two (){
        const website = "youtube"
        console.log(username);
    }
       // console.log(website);

       two()

}

// one()

if (true) {
    const username = "arya"
    if (username === "arya") {
        const website =" youtube"
       // console.log(username + website);
    }
    // console.log(website); error
}
// console.log(username); error

//+++++++++++++++++++(interesting)+++++++++++++++++++++

// hoisting 


//////////////////////////////////////////////////////////////////////

console.log(addone(5)); // here in function values can be accessed before initializaton 

function addone (num){
    return num + 1
}
// this can be accessed 

/////////////////////////////////////////////////////////////////////////

// this cannot be accessed

addtwo (5)
const addtwo = function(num){
    return num + 2
}

// cannot access 'addtwo' before initialization


/////////////////////////////////////////////////////////////////////////


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(addtwo(2));
const addthree = function hello (num){
    return  num + "hahaha"
}
// console.log(addtwo(5));
console.log(addthree(2));

console.log(typeof addthree());
// console.log(typeof hello());