/*
 functions ---->
 arrays ------->  object ------> null
 strings ------>

 everything in js is an object
 js shows prototypal behaviour
 */

let myname = "arya     "

console.log(myname.length);
console.log(myname.trim().length);

// console.log(myname.truelength);

/////////////////////////////////////////////////////////////

let myheroes = ["thor","spiderman"]

let heropower = {
    thor : "hammer",
    spiderman : "sling",

    getspiderpower : function (){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

//////////////////////////////////////////////////////
// injecting property in all objects

// here Object ke prototypes k ander direct arya method inject kiya hai issleya wo aab har ek object mai arya property aayegi

//functions , strings , arrays sab object ke through hi jata hai issleya sab mai arya property available ho jayegi

// top level hirerchey pe property inject kara di
Object.prototype.arya = function (){
    console.log(`arya is present in all objects`);
}

heropower.arya() // object ke pass arya property
myheroes.arya() // array ke pass arya property

//////////////////////////////////////////////////////

// injecting property in all arrays

Array.prototype.heyArya = function (){
    console.log(`arya says hello`);
}

// heropower.heyArya() // object ke pass array wali heyArya property kaam nahi karti
myheroes.heyArya() // array ke pass heyArya property 

////////////////////////////////////////////////////////////////

// inheritance

const user = {
    name : "arya",
    email: "arya@gmail.com"
}

const Teacher = {
    makevideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime : true ,
    __proto__:TeachingSupport
    // now TAsuppport can access the properties of TeachingSupport

}

// prototypal inheritance can be used outside the object also
Teacher.__proto__ = user
// here now teacher can access the properties of user

// above method is old 

// modern syntax for prototypal inheritance 
Object.setPrototypeOf(TeachingSupport, Teacher)
// here teachingsupport can access the properties of teacher

/////////////////////////////////////////////////////////////////////

let anotherUsername = "chaiAurCode                   "

String.prototype.truelength = function (){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);

}

anotherUsername.truelength() // this matlab jis ne bulaya.. yeha pe anotheruser ke ander chaiaurcode tha issleya output of this chaiaurcode aaya
"arya".truelength() 
"iceTea".truelength()


// string ko aise directly bhi property call kar sakte hai "string"
// string declaration :
// mystring = "it is a string"
// "this is also a string without variable"
