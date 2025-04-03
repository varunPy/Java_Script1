// function jab banate hai tab ek free space create hota hai object {} ke roop me aur use hi prototype khte hai 
// only functions provides prototype properties

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}
createUser.prototype.is18 = function(){
    return this.age >=18;
}
createUser.prototype.sing = function(){
    return "lalaallalalalala";
}

const user1 = createUser("varun", "verma", "abc@gmail.com", 23, "apna ghar");
const user2 = createUser("chanel", "verma", "xyz@gmail.com", 20, "apna ghar");

console.log(user1);
console.log(user1.sing());
