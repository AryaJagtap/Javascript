// all after ES6

class User1 {
    // below one is constructor
    constructor (username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    
    // below ones are methods
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User1 ("chai", "chai@mail" ,"123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

/////////////////////////////////////////////////////////////////////

// behind the scene without using class

function User2 (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encryptPassword = function (){
    return `${this.password}abc`
}

User2.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

const tea = new User1 ("tea", "chai@mail" ,"123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());