class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

        //somethinmes there might be situtions where you dont want to give access of this method to all those objects who have been instanciated through this class... at that time static keyword is used to deny the access of any specific method to the objects
    static createId(){     
        return `123`
    }
}

const arya = new User ("arya")
arya.logMe()
// console.log(arya.createId()); // due to static method this is not accessable

/////////////////////////////////////////////////////////////////

class Teacher extends User {
    constructor(username , email){

        super(username)
        this.email= email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone);
iphone.logMe()
// console.log(iphone.createId()); // static dont even gives access to the child or even the inheritance part

/////////////////////////////////////////////////////////////////////////