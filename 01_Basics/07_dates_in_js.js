let learndate = Date();
console.log(learndate);


let mydate = new Date()
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toString());
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());
console.log(mydate.getTime());
console.log(mydate.getTimezoneOffset());
console.log(typeof mydate);

// let mycreateddate = new Date(2004, 9 , 1, 24, 27 , 29) // in number format month starts from 0
// let mycreateddate = new Date("2020-01-01")// in written format month starts from 1
let mycreateddate = new Date("01-02-1990")
console.log(mycreateddate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(mycreateddate.getTime()); // gets time in milisecond
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getMonth() + 1); // as month and days starts from 0 in js so 0 means january or sunday...so to avoid confusion to user +1 is written so now it will how 1 to january and sunday aur waise hi baki months aur days ko bhi

// console.log(`${newdate.getDate()} and the time`); use interpolation 

console.log(newdate.toLocaleString('default', {
    weekday : "short",   // use control + space to see suggestions
    day : "numeric"
}));