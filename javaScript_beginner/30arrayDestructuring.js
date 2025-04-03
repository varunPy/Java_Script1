// array destructuring


//const myArray = ["value5", "value6", "value7"]

//const [value5, value6, value7] = myArray

//console.log(value5);
//console.log(value6);
//console.log(value7);

const myArray = ["value1", "value2", "value3", "value4"]

let [myvar1, myvar2, ...myNewArray] = myArray;

console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);

console.log(myNewArray);