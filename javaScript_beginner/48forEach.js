// for Each method

const numbers = [2,4,5,4,9];

//function myFunc(number, index){
    //console.log(`index is ${index} number is ${number}`)
//}

//numbers.forEach(myFunc);

numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`)
})

numbers.forEach(function(number){
    console.log(number*2)
})

// real world example


const users = [
    {firstname: "varun", age: 31},
    {firstname: "tarun", age: 31},
    {firstname: "shivani", age: 31},
    {firstname: "amrita", age: 31},
]

// by normal function
users.forEach(function(user,index){
    console.log(user.firstname, index);
})

// by arrow function 

//users.forEach((user, index)=>{
    //console.log(user.firstname,index);
//})

// by for of loop 

//for(let user of users){
   // console.log(user.firstname);
//}