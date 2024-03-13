
// this is the syntax of the function
// 1) functon keyword
// 2) name of the function
// 3) parenthesis ()
// 4) curly braces {}
// function saymyname ( ){
//     console.log("a");
//     console.log("r");
//     console.log("y");
//     console.log("a");
// }


// // saymyname => ye hai function ka reference
// // saymyname() => isko bolte hai function ko execute karna

// saymyname()

// function addtwonumbers (number1,number2){ // <= variables(or values) inside () this are parameters
//     number1 + number2
// }
// addtwonumbers()    // <= numbers(or values) inside this () is called arguments

// input of the function is called  parameter and when you call a function at that time jo values pass karte hai unko bolte hai arguments

// return ke baad kuch bhi print nahi hota hai


// function numbers(num1, num2){
//     console.log(num1 + num2);
// }
// numbers(2,3)
// null + null gives 0

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// function numbers(num1, num2){
//     let result = num1 + num2
//     console.log("arya");
//     return result
// }
// const result = numbers(10,5)

// console.log("result:" , result);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function numbers(num1, num2){
    console.log("Arya");
    return  num1 + num2
}

const finalresult = numbers(4,6)
console.log("result :" , finalresult);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function loginusermessage (username){
    return `${username} just logged in`
}

console.log(loginusermessage("Arya"));
// when nothing is passed through argument then the value in undefined

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function loginusermessage (username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginusermessage());

//++++++++++++++++++++++++++++++++++++++++++++++++++

// in javascript ""empty string, undefined are considered as false value

function loginusermessage (username = "Sam"){ 
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginusermessage());

// here now username has been given default value as sam
// if nothing is passed through arguments then sam will be the default value

// and if some value is passed through arguments then the parameters will rewrite the argumented value 
console.log(loginusermessage("Arya"));

