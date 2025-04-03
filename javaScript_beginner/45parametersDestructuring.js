// parameter destructuring 

//object (me use karte hai ) 
//react (use karte hai)

const person ={
    firstName: "harshit",
    gender: "male",
    age: 50
}

function printDeatils({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}