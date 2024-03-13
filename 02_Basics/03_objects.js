// literal
//constructor
//Object.create - object created through this method is called constructor method,aur isi ke ander singleton banta hai..
// singleton = object made from constructor is called singleton


// const myarray = ["a","b"]    // in arrays we can access arrays only by one method 
// console.log(myarray[1]);     // can assess element by writing element no. in [] brackets.


const mysym = Symbol("key1")


// object literals
const jsUser = {
    name : "arya",
    "fullname" : "arya jagtap",
    [mysym] : "mykey1",  // syntax to declare symbol
    age: 20,
    location : "mumbai",
    email: "arya@gmail.com",
    isloggedin : false,
    lastlogindays: ["monday", "thursday"]

}
console.log(jsUser.email); // one method to access objects
console.log(jsUser["age"]); // another method to access object
// while declaring object through 2nd method always use "" in brackets


// console.log(jsUser.fullname);
// console.log(jsUser["fullname"]);

// console.log(jsUser.mysym);
// console.log(typeof jsUser.mysym); // here it will show mysym as string but it is a symbol

// therefore,

console.log(jsUser[mysym]);
console.log(typeof jsUser[mysym]);  // still it is showing string??
// doubt hai doubt hai...

console.log(jsUser);  // but it is showing symbol when whole object is printed..but the typeof is showing symbol


jsUser.email = "arya@gpt.com" // to change the value
console.log(jsUser);

// Object.freeze(jsUser) // we use freeze when we want that no one shoult change the value of the object
jsUser.age = 100
console.log(jsUser); // here age is not changed from 20 to 100


// functions in js can also be treated as variables

jsUser.greeting = function(){
    console.log("hello user");
}

jsUser.greetingtwo = function(){
    console.log( `hello js user, ${this.name}`);  // this is used to define that we are saying about this function , kyu ki bhot functions mai name ho sakta hai to js ko kaise samjhega ki konse function ke ander ka name hai...is leya this use karte hai matlab ki talking about this function.

}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

// mostly boject is declared by . method
// but there are some scenario where [] are used to declare values
// e.g while useing symbol and when declaring in ""
// [mysym] , "fullname" , etc