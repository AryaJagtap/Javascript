const accountId = 144553
let accountEmail = "arya@google.com" // let is used inside the scope , scope means curly brackets {}
var accountPassword = "12345" // change in variables changes every variable in the code , it does not follows curly brakets{} (daso jage change ho jayega agar ek jage change kiya to.)
accountCity = "Mumbai" // variable can be declared in this way also, but this method of decleration is not recommended.
let AccountState;   // id such decleration is made then it gives output as undefined.

// accountId = 2   // const cannot be changed

accountEmail = "ab@kfnidsnfv"
accountPassword = 12221212
accountCity = "Bengaluru"


console.table([accountId,accountEmail,accountPassword,accountCity,AccountState])

// this is a single line comment
/* this is a multi line omment*/

/* prefer not to use var
because of issue in block scope and functional scope
*/
