//Exercises: Variables

/*    (1)The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." */

let children = 4
let wife = "queen"
let location = "whole world"
let jobtitle = "king"

let future = "you will be a " + jobtitle + " in " + location + " , and married to " + wife + " with " + children + " kids. "

console.log(future);


/*        (2)The Age Calculator
Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.*/

/*
let birthYear = 2004
let futureYear = 3004
let age = futureYear - birthYear

console.log("i will be either " + age + " or " + (age-1) + " in " + futureYear + ".");
*/

/*
var birthYear = 1984;
var futureYear  = 2012;
var age  = futureYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));
*/


/*    (3)The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".*/

let currentage = 20
let maxage = 150
let estimated_amount = 2
let total = (estimated_amount * 365) * (maxage - currentage)
console.log("you will need " + total + " cups of coffee to last you until the ripe old age of " + maxage);


var age = 28;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
console.log(message);

/*
    (4) The Geometrizer
Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
 */


     let radius = 10
let circumference = Math.SQRT2 * Math.SQRT2 * radius
console.log("the circumference is " + circumference);

let area = Math.PI * (radius*radius)
console.log("the area is " + area);
    


/*
var radius = 3;
var circumference = Math.PI * 2*radius;
console.log("The circumference is " + circumference);
var area = Math.PI * radius*radius;
console.log("The area is " + area);
*/

/**
 *   (5)The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
 */

let c = 25
let fahr = -17.22 * celcius

console.log(celcius + "celcius is " + fahrenheit);

celcius = ((f-32)/1.8000)