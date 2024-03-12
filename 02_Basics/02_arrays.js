// const marvel_heroes = ["thor", "ironman", "spiderman", "hulk" ]
// const dc_heroes = ["superman", "flash" , "batman", "aquaman"]
// const numbers = [10,20,30,40,50]

// // marvel_heroes.push(dc_heroes)        // this is not good syntax to merge multiple arrays
// // console.log(marvel_heroes);
// // console.log(marvel_heroes[4][2]);  

// // this is concat method to merge arrays
// const all_heroes = marvel_heroes.concat(dc_heroes,numbers)
// console.log(all_heroes);

// // this is spread operator method to merge arrays
// // [...]= this 3 dots are knows as spread operator
// const all_new_heroes = [...marvel_heroes,...numbers,...dc_heroes] 
// console.log(all_new_heroes);

const multiple_arrays = [1,2,3,[10,9,],4,5,[8,7,6,[6,7,8,[5,4,3,[9,10]]],6,7,8,9,10]]
// console.log(multiple_arrays);
// console.log(multiple_arrays[6][3][3][3][1]);

// to convert nested array into single array flat is used

const single_array = multiple_arrays.flat(1)
console.log(single_array);

const single_array1 = multiple_arrays.flat(2)
console.log(single_array1);

const single_array2 = multiple_arrays.flat(3)
console.log(single_array2);

const single_array3 = multiple_arrays.flat(4)
console.log(single_array3);

const single_array4 = multiple_arrays.flat(Infinity)
console.log(single_array4);

// .flat() in this parenthesis put the number till what length you want to resolve the array
// to get all the elements use infinity if you dont know the depth of array


console.log(Array.isArray(multiple_arrays));

console.log(Array.isArray("arya"));
console.log(Array.from("Arya"));

const alpha = "hello!@#$%^&*()23456789"
console.log(Array.isArray(alpha));
console.log(Array.from(alpha));

//Array.isArray() // this is used to check wether the given data is array or not
//Array.from() // this is used to convert the data into array
//Array.of()  // this is used to make an array set from the given variable set
console.log(Array.from({name : "arya", age : 20})); // INTERESTING CASE
// this will output an object [] as it directly cannot convert the object into array because of key:value pairs in it

let score1 = 100
let score2 = true
let score3 = "hello"

console.log(Array.of(score1,score2,score3));
