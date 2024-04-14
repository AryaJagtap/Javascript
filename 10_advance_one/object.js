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
    this.score++
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
