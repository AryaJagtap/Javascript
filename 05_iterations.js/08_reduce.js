// reduce method

const mynums = [1,2,3]

// let mytotal = mynums.reduce( function (accumulator , currentvalue) {
//     console.log(`acc is ${accumulator} and curr is ${currentvalue}`);
//     return accumulator + currentvalue
// },10)
// function ke baad comma lagta hai aur wo value dete hai jaha se start karna hai

// console.log(mytotal);

////////////////////////////////////////////////////////////////////
// same in arrow function

let mytotal = mynums.reduce( (accumulator, currentvalue) => (accumulator + currentvalue) , 0 )
console.log(mytotal);

///////////////////////////////////////////////////////////////////

const shoppingcart = [
    {
        itemname : "js course",
        price : 2999
    },
    {
        itemname : " web dev",
        price : 1399
    },
    {
        itemname : "dsa",
        price : 1599
    },
    {
        itemname : "mobile dev",
        price : 12999
    },
]

const myamount = shoppingcart.reduce((accumulator,item) => (accumulator + item.price),0)
console.log(myamount);

////////////////////////////////////////////////////////////////////////