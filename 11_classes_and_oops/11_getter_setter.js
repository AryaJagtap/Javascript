// method 1

class User {
    constructor (email, password){

        this.email = email
        this.password = password
    }

    get email (){

        return this._email.toUpperCase()

        // getter will always have a return
        // here _email will be a new variable(private property) which is only accessable inside getter
        // here _email is a random variable you can name it anything

        // getter is the thing which shows the output what will come to user
    }

    set email(value){
        // to pass a parameter(value) in setter is compulsary
        // setter do not have return 
        this._email = value

        // here _email is a random variable you can name it anything
        this.apple = value.toUpperCase()

        // setter is the thing which stores the value in the data base
    }

    // if in situtions where we do not want to share what we are inputting at that time we can show something else on output using getter and can still store the exact value in database using setter
    // for example password, here is the password example below which shows dummy password on output and stills stores original password value using setter


    get password(){

        return `${this._password}arya`

    }

    set password(value){

        this._password = value

    }

}   

const arya = new User ("a@arya.ai","123")
console.log(arya.email);
console.log(arya.password);

/////////////////////////////////////////////////////////////////////////

class User1 {
    constructor(email, password) {
        this.email = email;
        this.originalPass = password; // Renamed the property to avoid conflict
    }
    get fullPassword() {
        return `a12cd${this.originalPass}bsj53${this.originalPass}4n2jn3`; // Modified to use originalPass
    }
    set password(value) {
        this.originalPass = value;
    }
}   

const arya1 = new User1("a@arya.ai", "123");
console.log(arya1.fullPassword); // Changed to use the getter method correctly

/////////////////////////////////////////////////////////////////////////

// method 2
// function based
// before classes how getters and setters were used
// this is an old technique , but is a modern based syntax as we use functions to do this 
// getters and setters were used using define properties


function User2 (email, password){

    this._email = email
    this._password = password

    // function behaves like function and also like object, so here directly new property have been defined to the object 

    Object.defineProperty(this, 'email', {
        get : function (){
            return this._email.toUpperCase()
        },
        set : function (value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get : function (){
            return this._password.toUpperCase()
        },
        set : function (value){
            this._password = value
        }
    })
}

const chai = new User2("chai@chai.com", "chai")
console.log(chai.email);
console.log(chai.password);

//////////////////////////////////////////////////////////////////////

// method 3
// object based

const User3 = { 
    _email : 'a@a.com',        // private property
    _password : 'abc',        // private property

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this.email = value
    }
}

// NEW IS A CONSTRUCTOR FUNCTION
// factory functoion = Object.create()

// directly factory function se bhi object declare kar sakte hai..like below

// const tea = new User3() // cannot define like this because user3 is not a constructor
const tea = Object.create(User3)
console.log(tea.email);

// class , function , object ke ander this.username , this.email, etc etc use karne ke baad agar same variable getter aur setter mai define karoge i.e this.username , this.email , etc etc then yeha pe race condition start hogi aur stack overflow ka error ayega ..  call stack exceed limit
// dono class , function , object aur getter ,setter will race for the variable saming same i.e this.username ,etc

// https://www.youtube.com/watch?v=t6vLhF-iSxQ&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=48&ab_channel=ChaiaurCode

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////