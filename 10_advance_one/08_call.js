/*
function ke ander function ka execution context kya hoga..
that is function ke and er function ka this kya hoga
*/


function setUsername (username){
    // suppose complex db calls completed

    this.username = username
    // ye this gayab ho jayega function run hone ke baad, issleya values iss this mai nahi save karneka .. dusre function ke this ke reference mai save karne ka... so that after function is executed from the call stack values gets stored in another function this
    console.log("function called");
}

function createUser(username, email, password){

    // without using call function all the variables saved in the execution context will be vanished off as soon as the functin is completed out of the call stack
    setUsername.call(this, username) 

    // whenever using call , first parameter optionally this pass kar sakte ho
    // .call function is used to hold the variables and all the data (reference)
    // this, = here parameter value of setuser is saved in this of function createuser 
    
    this.email = email
    this.password = password
}

const chai = new createUser("Arya", "arya@gmail.com", "123")
console.log(chai);