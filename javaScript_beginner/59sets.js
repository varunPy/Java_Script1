// sets (it is iterable)
// store data
// sets also have its own methods 
// no  index-based access
// order is not gaurenteed 
// unique items only(no duplicates allowed)

// sets use when you have any unique value and not comes multiple time 

const myArray = [1,2,4,4,5,6,5,6];

const uniqueElements = new Set(myArray)
let length = 0;

// for of loop

for(let element of uniqueElements){
    length++;
}

console.log(length);
console.log(uniqueElements);
console.log(myArray);

