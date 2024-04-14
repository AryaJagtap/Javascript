// object literal
// js mai object literal ko hi base unit bola gaya hai 
// litreally ek object banana is object literal
// object literal ke ander collection hota hai properties aur methods ka


const user = {

    // below down are properties [jaise array ke ander .length properties di jati hai waise hi ye sab .properties hai]

    username: 'arya',
    logincoount : 8,
    signedin : true,

    // below down are methods [method matlab jo function se bana ho usko method bolte hai, method ko () se call kiya jata hai]
    getuserdetails : function (){
        // console.log('got user details from data base');
    }

}

// console.log(user.username); // properties access karneke leya .property ka naam likhne se reference deke kaam ho jata hai call() nahi akrna padta
// console.log(user.getuserdetails()); // method ko run karna padta hai () lagake . ()isi ko call karana bhi bolte hai

// this keyword means talking about current context
// monday monday hota hai , iss week wala monday ki last week wala monday
// this is an object , issleya ,deke values di jati hai

const user1 = {

    username: 'arya',   //
    logincoount : 8,   // this is current context
    signedin : true,  //

    getuserdetails : function (){
        // console.log(this.username);
        // console.log(this); // current context print hoga
    }

}
// console.log(user1.username);
// console.log(user1.getuserdetails());
// console.log(this); // there it will show empty object
// but in browser it will give so many values

////////////////////////////////////////////////////////////////////////

// constructor function :

// const promiseone = new Promise()
// const date = new Date() 
// this new keyword is constructor function
// constructor function allows to create multiple instances through one object literal(object)
// ek hi instance hoga to acchi baat hai memory kam lag rahi hai

function User (username, logincount , isloggedin){
    // username = username // issmai samjhega nahi ki konsa variable hai aur konsa parameter se passed ki hui value...so this is used

    // lhs is variable , rhs is parameter passed value
    // ye sab properties hai neeche ke sab
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin

    // ye neecheka method hai
    // method yaniki funciton hai par jo marzi boleyea kya farak padta hai
    this.greetings = function() {
        console.log(`welcome ${this.username}`);       
    }

    return this // new keyword likhne ke baad return nahi likha to bhi chalega
 }
const userone = User('arya', 20,true);
const usertwo = User('apple', 18,false)
// console.log(userone);
// console.log(usertwo);
// usertwo kabhi print hi nahi kiya tha fir bhi output mai usertwo ki values userone pe aa gayi... values overwrite ho gayi..
// this is the problem , and solution to this problem is constructor function that is using 'new' keyword

// const userone = new User('arya', 20,true);
// const usertwo = new User('apple', 18,false)
// console.log(userone);
// console.log(usertwo);

// can be written in this way too without using variable, but variable one is recommended to be more readable

// console.log(new User('hello',25,true));
// console.log(new User('haha',10,false));

/** new keyword:
 * step 1: jaise hi new keyword use karte hai ek naya empty object create hota hai jisko instance bola jata hai
 * step 2: constructor function call hota hai, new keyword ke karan;
 * ye kya karta hai jitne bhi arguments hote hai unko pack akrke deta hai
 * step 3: this keyword hai uske ander jo bhi arguments likhe hai wo inject ho jate hai
 * step 4:  function ke ander mil jate hai
 */

// console.log(userone.constructor); 
// console.log(usertwo.constructor);
// [Function : User]
// run karne ke baad aya kya hai ek funciton hai jiska naam hai user
// constructor kya hota hai, ek property hoti hai , reference hoti hai khud ke bare mai... jaise user kya hai function hai... so wohi likha hai output hai

/////////////////////////////////////////////////////////////////////////

// instanceof operator

// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.

// mdn link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

function fruit (name,color,cost_as,price){

    this.name = name
    this.color = color
    this.cost_as = cost_as
    this.price = price

    

}
const apple = new fruit('apple','red','dozen',100)
console.log(apple);

const banana = new fruit('banana','yellow','dozen',50)
console.log(banana);

console.log(apple instanceof fruit);
console.log(banana instanceof User);
console.log(userone instanceof fruit);
console.log(banana instanceof fruit);