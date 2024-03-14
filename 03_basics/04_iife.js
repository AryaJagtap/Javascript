// IIFE : Immediately Invoked Functon Expression

// this is known as named iife as it has a name "chai"

(function chai (){
    console.log(`Database connected`);
}) ();

// () () ;

// 1st parenthesis mai function ko wrap karke likhnema
// 2nd parenthesise mai function ko execute karneka
// always use semicolen; after 2nd parenthesies to end the execution
// this is only known as IIFE

///////////////////////////////////////////////////////////////////

// iife with arrow function
// this are simple iife as they dont have name

( () => {console.log(`Database connected Two`);}) ();

// or

( () => {
    console.log(`Database connected Two`);
}) (); 

////////////////////////////////////////////////////
// parameters and aurgumented passed iife

( (name) => {
    console.log(`Database connected Two ${name}`);
}) ("arya");

// iife ko normal function jaisa hi samjho while passing parameters and arguments to confusion nahi hoga...
