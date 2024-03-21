const coding = ["js","cpp","ruby","java"]

const values = coding.forEach ( (item)=> {
    //  console.log(item);
     return item
})

// console.log(values);

// return likho ya nahi... FOR EACH LOOP VALUES RETURN NAHI KARTA

/////////////////////////////////////////////////////////////////////

// filter operation
const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter( (num)=> num > 4)
// console.log(newnums);

// filter mai arrow ke baad condition check hoti hai true or false 
// true contition execute hote hai

const newnums2 = mynums.filter((nums) => { 
   return nums > 4
})
// console.log(newnums2);
// () => ()
// () => {}
// ( ) parenthesises lagaye to return likhne ki jarurat nahi
// { } agar curly braces use kiye to return word likhna padega

//////////////////////////////////////////////////////////////////
// same example using foreach

const newnums3 = []

mynums.forEach( (nums) => {
    if (nums > 4) {
        newnums3.push(nums)
    }
})
// console.log(newnums3);

// sirf forloop se nahi hoga sath mai if condition bhi lagana padega  
///////////////////////////////////////////////////////////

// examples on filter 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbooks = books.filter ( (bk) => (bk.genre === "History"))

userbooks = books.filter ( (bk) => {return bk.publish >= 1995})    // overwriting
// if curly braces {} are use then always remember to use return keyword


userbooks = books.filter ( (bk) => (bk.genre === "History" && bk.publish >= 1995))  // overwriting
console.log(userbooks);

/////////////////////////////////////////////////////////////////////////////////////////


