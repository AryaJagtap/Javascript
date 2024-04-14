function multiplyby5(num){
    return num*5
}

// multiplyby5(5) // 
multiplyby5.power = 100

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);
console.log(typeof multiplyby5.prototype); // thus array became object

let arrayobject = multiplyby5.prototype.length

console.log(arrayobject);

///////////////////////////////////////////////////////////////////////

function createuser (username, score){
    this.username = username
    this.score = score 
}

// here we can inject our own property aslo... as follows
createuser.prototype.increment = function (){
    // hello = this.score++
    console.log(this.score++);

    // this matlab jis
    // this matlab jisne bhi bulaya hai uski value increment kar do
}

createuser.prototype.printme = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createuser('chai',25)
const tea = new createuser('tea',250)
// if new keyword is not used then the function will not come to know that you have manually created your own prototype property..to know what all things have been newly added in the prototype list new keyword is used here.
// new key word have multiple uses as some uses were used in earlier lectures

chai.printme()
tea.increment()

/////////////////////////////////////////////////////////////////////////

// new keyword notes
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/