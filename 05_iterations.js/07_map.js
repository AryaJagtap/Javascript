// map callback function

const mynumbers = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynumbers.map( (num) => (num + 10))

// console.log(newnums);

///////////////////////////////////////////////////////////

const newnums1 = []

mynumbers.map( (nums) => {
    if (nums > 4) {
       newnums1.push(nums)

    }
})
// console.log(newnums1);

/////////////////////////////////////////////////////////

// in filter is the condition is true then only it iterates
// in map there is no such true or false things 


// chaining method
// using 2-3 methods at once is called chaining
// result of 1st method will be the input data for the 2nd method and so on...


const newnums100 = mynumbers.map((num) => num*10 ).map( (num) => num + 1).filter((num) => num >= 40 )
console.log(newnums100);

//////////////////////////////////////////////////////////////////////
// same in better format

const newnums101 = mynumbers
                .map((num) => num*10 )
                .map( (num) => num + 1)
                .filter((num) => num >= 40 )

console.log(newnums101);
