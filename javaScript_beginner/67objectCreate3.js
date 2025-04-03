// create object 

const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} year old`;
    },
    is18: function (){
        return this.age >=18;
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods); //{} // important (proto)
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    
    return user;
}

const user1 = createUser("varun", "verma", "abc@gmail.com", 45, "apna house");
const user2 = createUser("chanel","verma", "abc@gmail.com", 23, "apna ghar");
const user3 = createUser("sanaya", "verma", "abc@gmail.com", 34, "apna ghar");

console.log (user1.about());
console.log (user2.about());
console.log (user3.about());
