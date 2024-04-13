/*
 Promises:
 The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

 option 1 : async await
 option 2 : promises // used in modern world

 => promises have 3 states, while xhr have 5 states
 => 2 parts of promise
 => promises are created
 => prmises are consumed  // mostly we consume promise rather than creating

 .then() = > resolve
 .catch() = > reject
 .finally() => either any one of them

 const mypromise = new Promise() // this is how promise is created
 new Promise(function(){}) // it can be written in this way also
=> before promise async await was used
=> promise intakes callback function
=> there are two parts of that callback function one is resolve another is reject
=> resolve means task is completed
=> reject means task is not completed

// do an async task
// db calls, cryptography, network 
// this are the types of tasks written in callback function
*/

// creation of promise

// const promiseOne = new Promise(function(resolve,reject){
//     // do an async task
//     // db calls, cryptography, network 

//     setTimeout(function () {
//         console.log('async task is completed');
//         resolve() // remember to connect resolve to .then by using this line (in other words it is know as resolve ka execution or resolve ko execute karna)
//     },1000) // NOTE: always remember to write time in ms after the callback function or else it will by default take 0 
// })

// // consumption of promise

// promiseOne.then(function(){
//     console.log('promise consumed');
// })
// //.then has direct relation with resolve


// ////////////////////////////////////////////////////////////////////////
// // CAN WRITE IN THIS WAY TOO WITHOUT DECLARING VARIABLE

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2');
//         resolve()
//     },1000)

// }).then(function(){
//     console.log('async 2 resolved');
// })

// ////////////////////////////////////////////////////////////

// const promiseThree = new Promise(function(resolve,reject){

//     setTimeout(function(){
        
//         resolve({username:'arya', email: 'arya@example.com'}) // resolve ke ander data bhi pass kar sakte hai.. mostly {object} pass hota hi...but apka maan arrays pass akro function pass karo...kuch bhi pass kar sakte hai
//     },1000)
// })

// promiseThree.then(function(kuch_data_ayega_resolve_se){
// console.log(kuch_data_ayega_resolve_se);
// })

//////////////////////////////////////////////////////////////////////

// const promiseFour = new Promise(function(resolve,reject){
    
//     setTimeout(function(){
//         let error = false

//         if (!error) {

//             let somedata = {username:'arya' , password: '1234'}
//             resolve(somedata)

//         } else {
//             // const print = console.log("Error: something went wrong");
//             // reject(print) // same as below line
//             reject("Error: something went wrong")
//         }
//     },2000)
// })
// let apple = promiseFour
// .then(function(kuch_to_ayega){
//     // callback hell
//     // console.log(kuch_to_ayega);
//     return kuch_to_ayega.username // aisa return ki hui value upar wale apple variable mai store nahi hoti, wo retun ki hui value aage next method ko input data ke form mai jati hai... isko chaining bolte hai
// })
// .then((banana)=> {  // this is known as chaining..
//     console.log(banana);  // arrow function bhi use kar sakte hai not necessary normal funciton hi chayea
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{console.log('The promise is either resolved or rejected');})
// jo bhi kaam tha wo ho gaya ki nahi that is resolve huva ki reject huva ye batane ke leya .finally() use hota hai, finally hamesha execute hota hai 
// promise ka ek time hota hai aisa nahi ki promise unlimited time ke leya chalta hai, after a specific interval of time finally use hota hai ye batane ke leya ki x amount of time ke baad jo task hona tha wo ho gaya hai ki nahi
// chaining next line pe bhi likh sakte hai syntaxtical issue hai dono mai se kaise bhi likho

////////////////////////////////////////////////////////////////////////

/*
    => promise can be handled by async await also
    => async await is also like .then .catch , it waits sometimes for the task to get complete, if the task is completed it goes ahead and if the work is not done it returns with an error
    => in this we do not handle catch
    => its like database connection huva hi nahi hai to mhuje aage badhna hi nahi hai
    => agar resolve huva hai to value aayegi
    => agar reject huva hai to error aayega hi aayega (terminal pe actual error)
    


*/ 

// const promiseFive = new Promise(function (resolve,reject){

//     setTimeout(function(){
//         let error = true

//         if (!error) {

//             resolve( {username:'javascript' , password: '1234'})

//         } else {
            
//             reject("Error: something went wrong")

//         }
//     },2000)

// })

// async function consumePromiseFive (){
//     // jaha bhi async aa gaya then uske ander await use kar sakte hai
    
//     // const responde = await promiseFive() // promise ek object hai to  usko aise () parenthesies lagake consume nahi karte
    
//     const Response = await promiseFive
//     console.log(Response);
// }
// consumePromiseFive()


/*
    => to handle error in async await , try and catch method is used
    => catch mai simply error hai aisa print kar sakte hai, so that samaj aata hai ki reject huva hai resolve nahi

 */


// async function consumePromiseFive (){
//     try {

//         const Response = await promiseFive
//         console.log(Response);

//     } catch (error) {

//         console.log(error);
//     }
    
// }
// consumePromiseFive()

//////////////////////////////////////////////////////////////////////

async function getAllUsers (){

    const response = await fetch('https://api.github.com/users/AryaJagtap')
    /*
    => fetch is an object, pahele library thi
    => url fetch ki hai to response aane mai time lag sakta hai, issleya aage await use kiya hai ki response aane tak wait karo
    => response ko variable mai store kiya hai jiska naam bhi response rakha hai, variable ka naam kuch bhi rakh skate hai

    */
    const data = await response.json()
    // await use kiya hai kyu ki json mai convert hone mai bhi time lagta hai issleya await use nahi kiya to error milega 
    // response ko json mai convert kiya kyu ki response string ya object kaise bhi aata hai
    console.log(data);
}
getAllUsers()


///////////////////////////////////////////////////////////////////////

// same above example using .then . catch in fetch

fetch('https://api.github.com/users/AryaJagtap')
.then((apple)=> {return apple.json()}) // await , try catch ye sab use karne ki jarurat nahi padi, because we know that ek then pura hojayega uske baad hi aage wala start hoga uske bina start hi nahi hoga, this is known thenning (chaining)
.then((above_return_as_parameter_data)=>{console.log(above_return_as_parameter_data);})
.catch((error_parameter)=> console.log(error_parameter))