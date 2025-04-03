// objects

//arrays are good but not sufficient
//for real world data
// objects store key value pairs
// objects dont have index

// how to crete objects 
// how to access data from objects

// how to add key value pair to objects


const person ={name:"varun",age:25};
console.log(person);

const person1 = {
    name: "varun",
    age:"25",
    hobbies: ["guitar", "sleeping","music"]

}
//add key value pair
person1.gender = "male";
console.log(person1)

//access data from objects (in java address values are store in string)

console.log(person["name"]);
console.log(person["age"])


//diffrence between dot notation and bracket notation 

const key = "email";
const person2 ={
    name:"varun",
    age:"27",
    "person2 hobbies": ["music","sleeping","net"]
}

console.log(person2.age);

console.log(person2["person2 hobbies"])
person2[key] = "varun@gmail.com"
console.log(person2);