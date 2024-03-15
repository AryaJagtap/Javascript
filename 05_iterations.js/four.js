// for in loop
// for in loop on objects

const myobj = {
    js : "javascript",
    cpp: "c++",
    rb : "rupy",
    swift : "swift by apple"
}

for (const apple in myobj) {
//    console.log(`${apple} shortcut is for ${myobj[apple]}`);

}

/////////////////////////////////////////////////////////////////////
// for in loop with arrays

// const programming = ["js","cpp","ruby","java"]

// for (const key in programming) {
//    console.log(key);
// }

// this prints 0,1,2,3 that is index value of array
// thus this below method is used

const programming = ["js","cpp","ruby","java"]

for (const key in programming) {
   console.log(programming[key]);
}

///////////////////////////////////////////////////////////

// for in loop with maps

const mymap = new Map()
mymap.set( "in" , " bharat" )
mymap.set( "fra" , " france" )
mymap.set( "usa" , " united stated of america" )

for (const key in mymap) {
   console.log(key);
}
// this prints nothing
// for in loop is not applicable for maps
// maps are not iteratable in for in loop

//////////////////////////////////////////////////////////////////////

// For Array = use for of loop
// For Objects = use for in loop

