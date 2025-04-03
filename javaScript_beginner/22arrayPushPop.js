let fruits = ["kiwi", "mango", "grapes", "banana"];

console.log(fruits);

//push method me original array me any value store karana


fruits.push("apple");

console.log(fruits);

//pop(ye method array me last se removed karta hai and value return bhi karta hai )

let poppedFruit=fruits.pop();

console.log(fruits);

console.log("popped fruit is", poppedFruit)

//unshift (starting se array me add karne ke liye method );

fruits.unshift("lichi");
console.log(fruits);

//shift(starting se element remove karne ke liye and ye value return me bhi dega);

let removedFruit =fruits.shift();
console.log(fruits);
console.log("removed fruit is", removedFruit);


//push and popped is fast if compared to shift and unshift