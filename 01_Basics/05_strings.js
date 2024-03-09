const name = "arya"
const repocount = 50 

console.log(name + repocount + "value"); // but this is old method

console.log(`hello my name is ${name} and my repocount is ${repocount}`); // this is new and modern method
// this method is know asstring interpolation where inside backticks `` ${} is used .

const gameName = new String('king@kong')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase()); // dont forget () after .method eg.toUpperCase()


console.log(gameName.charAt(2));
console.log(gameName.indexOf("k"));

const newstring = gameName.substring(0,4) // 0 = start number 4 = end number
console.log(newstring); // in substring negative values cannot be used

const anotherstring = gameName.slice (-6 , 4)
console.log(anotherstring); // in slice negative values can be used

const newstr1 = "      arya     "
console.log(newstr1);
console.log(newstr1.trim());

// link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim


const url = "https://arya.com/arya%20javascript"

console.log(url.replace('%20', '-'));

console.log(url.includes('arya'));
console.log(url.includes('pokemon'));

console.log(gameName.split('@'));
console.log(url.split('/'));