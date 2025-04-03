// new keyword

function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;

}

createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}

const user = new createUser("varun", 6);

user.about();

// new keyword 

// 1) this = {}
// 2) return {}



function CreateUser(firstName, lastName, email, age, address){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}
CreateUser.prototype.is18 = function(){
    return this.age >=18;
}
CreateUser.prototype.sing = function(){
    return "lalaallalalalala";
}

const user1 = new CreateUser("varun", "verma", "abc@gmail.com", 23, "apna ghar");
const user2 = new CreateUser("chanel", "verma", "xyz@gmail.com", 20, "apna ghar");

console.log(user1);
console.log(user1.sing());


// find key by using hasOwnProperty

for(let key in user1){
    //console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}

