const tinderuser = new Object()  // singleton object
const tinderuser2 = {} //non singleton object

console.log(tinderuser);
console.log(tinderuser2);

// both methods are correct to declare a object

tinderuser.id = "123qdfk"
tinderuser.name = "sammy"
tinderuser.isloggedin  = false

// console.log(tinderuser);

const reguser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "arya",
            lastname : "jagtap",
            age : 100
        }
    }
}

console.log(reguser.fullname.userfullname.firstname);
console.log(reguser);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}


// to combine objects

let obj4 ={ obj1 , obj2 , obj3}
console.log(obj4); // this will not work properly as we want the value


const obj5 = Object.assign({}, obj1, obj2, obj3) // assign method
// there 
// {} = target
// obj1, obj2, obj3 = source
// NOTE : 1irst input is always the target and rest others are source
// here {} is always used as target so that we get targeted ans as object{}

console.log(obj5);
console.log({...obj1,...obj2,...obj3}); // spread operator just like in arrays

const user = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    },
    {
        id : 3,
        email : "c@gmail.com"
    },
]

console.log(user[1].email)

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
// here the output is always in arrays

console.log(Object.entries(tinderuser)); 
// entries bhot kam use hote hai
// array ke ander array banaya jata hai uski key value pair ko array banaya jata hai

console.log(tinderuser.hasOwnProperty("isloggedin")); // to check wether there exist any such property or not in the object
console.log(tinderuser.hasOwnProperty("isloggedout"));


// .method = dot notation
// [method] = square bracket notation

// kabhi bhi {}curly braces dekhenge to samaj hi jayenge ki destructuting ki ja rahi hai


// dectructuring an object


const course = {
    coursename : "js in hindi",
    price : 999,
    courseinstructor : "arya"

}

console.log(course.courseinstructor); // this method sometime is long and timepass karne wala hota hai..
// another method can be used jo easy hai

const {courseinstructor} = course
console.log(courseinstructor);

const {courseinstructor: instructor} = course // agar naam edit karna ho to : lagake change bhi kar sakte hai
console.log(instructor);



// all api are jason format only
// json = javascript object notation

//json talks

// this is jason format where keys are also written in ""
{
    "name": "Arya"
    "price": "free"
    "coursename": "js in hindi"
}

[
    {},
    {},
    {}
]

// object ka naam hota hai json ka naam nahi hota 
// i.e 

const NotAjSon = {
    name: "hello",
    age: 1000,

}


// this is object 
{
"name" : "hello"
"age" : 1000
}
// this is json