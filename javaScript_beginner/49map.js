// map method 

const numbers = [3,4,6,1,8];

//const square = function(number){
   // return number*number;
//}


const squareNumber = numbers.map((number)=>{
    return number*number

}) 


console.log(squareNumber);

const users = [
    {firstname: "varun", age: 31},
    {firstname: "tarun", age: 31},
    {firstname: "shivani", age: 31},
    {firstname: "amrita", age: 31},
]

const userNames = users.map((user)=>{
    return user.firstname;

})
console.log(userNames);