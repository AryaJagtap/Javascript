class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// extends property is used to inheritate the properties of one class to another
// here properties of user are inheritated in teacher class
class Teacher extends User {
    constructor (username , email , password ){
        
        super(username)  // here in class instead of all that .call property , just super keyword is used to bring the username value from another class to this class
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher ("chai", "chai@email", "123")

chai.addCourse()
chai.logMe()  // teacher class have access to userclass


const masalachai = new User ("masalachai")
masalachai.logMe()
// masalachai.addCourse() // user class dont have access to teacher class


console.log(chai === masalachai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);

// both equal nahi hai , instance hai
