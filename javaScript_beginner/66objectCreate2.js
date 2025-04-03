// create object dynamically 

function createUser(firstName, lastName, email, age, address){
    const user ={};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} year old`;
    };
    user.is18 = function (){
        return this.age>=18;
    }
    return user;
}

const user1 = createUser("varun", "verma", "abc@gmail.com", 45, "apna house");
const user2 = createUser("chanel","verma", "abc@gmail.com", 23, "apna ghar");
const user3 = CreateUser("sanaya", "verma", "abc@gmail.com", 34, "apna ghar");


// is code me kya galat hai ? jitne baar user create honge utni baar methods call honge jiisse ki memory consumption hoga and millions for user ke liye millions times methods call hpne this is not a good code ;
// improve code in next file nos 67objectCreate3.js file