// this = means current context

// context ka matlab hai simple values uske ander jo jo apke variables hai wo kya hold kar rahe hai

// YE OBJECT HAI
const user = {
    username : "arya",
    price : 999,

    welcomeMessage : function  (){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    },
    

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this); // here this will show {} because in node environment this in global space is empty
// but this in browser will show window , as window is global space for this in browser.

//YE FUNCTION HAI
// function chai (){
//     let username = "arya"
//     console.log(this.username); // THIS WILL GIVE UNDEFINED AS THIS CAN NE USED IN OBJECTS AISE FUNCTIONS KE ANDER AAKE NAHI USE KAR SAKTE
// }
// chai()

///////////////////////////////////////////////////////////////

// function chai (){
//     let username = "arya"
//     console.log(this);
// }
// chai()

//////////////////////////////////////////////////  

// const chai = function (){
// let username = "ARYA"
// console.log(this.username);
// }
// chai()
// aise function ko variable mai declare karna isko expression bhi bolte hai
////////////////////////////////////////////////////////////
 

// this is arrow function
// const chai =  () => {
//     let username = "ARYA"
//     console.log(this.username);
//     }
// chai()

////////////////////////////////////////////////////////////////

// syntax of arrow function 

// () => {}      ye hai basic arrow function ka syntax

// const addtwo = () => {} // isko bolte hai arrow function ko variable(or name) ke ander hold karn

// const addtwo = (num1,num2)=>{}  // passing parameters 

////////////////////////////////////////////////////////

const addtwo1 = (num1,num2) => {
    return num1 + num2
}
console.log(addtwo1(3,5));

///////////////////////////////////////////////////////////////////

// implicit return
// jab ek hi line ka statement(return) hota hai tab mostly use hota hai implicit function ka 

const addtwo2 = (num1,num2) => num1 + num2

console.log(addtwo2(3,5));

/////////////////////////////////////////////////

const addtwo3 = (num1,num2) => (num1 + num2) // this technique is very useful in react

console.log(addtwo3(3,5));

// curly{} braces mai wrap kiya to return likhna padega, parenthesis mai wrap kiya to return nahi likhna padega


const addtwo4 = (num1,num2) => {return num1 + num2}

console.log(addtwo4 (3,5));

/////////////////////////////////////////////////////////////
// when we want to retun object we need to wrap the {}object into () parenthesies

const addtwo5 = (num1,num2) => ({username:"arya"}) 

console.log(addtwo5 (3,5));

//////////////////////////////////////////////////////////////
// using function in array / loops
const myarray = [2,3,4,5,6,7]
myarray.forEach( function (){})
myarray.forEach(()=>{})
// myarray.forEach(()=>())
// iske upar indepth discussion aage hoga