// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const item of arr) {
    // console.log(item);
}

const greetings = "hello good morning"

for (const greet of greetings) {
    console.log("each char is " + greet);
}

/////////////////////////////////////////////////////

// maps
// map apne aap mai ek object hai
// mai mai key value pair comma se likhte hai

const mymap = new Map()
mymap.set( "in" , " bharat" )
mymap.set( "fra" , " france" )
mymap.set( "usa" , " united stated of america" )

console.log(mymap);

///////////////////////////////////////////////////////

for (const [key , value] of mymap) {
    console.log(`shortform of ${value} is ${key}`)
}

// here is a shortcut that when in maps there are key value pair we cannot use forloop directly to print the keys and values separately..
// we need to seperate the iterator by using [] so that we can take multiple variables as we need

//////////////////////////////////////////////

// objects
const myobj = {
    game1 : "nfs",
    game2 : "mario",
    game3 : "spiderman"
}

for (const iterator of myobj) {
    console.log(iterator);
}
// it gives an error that object is not iteratable
// for of loop is not valid to iterate objects
// for in loop is used to iterate object

/////////////////////////////////