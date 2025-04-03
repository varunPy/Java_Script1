class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
       
    }
    about(){
        return `${this.firstName} is ${this.age} years old`
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return "lalalaalalalallala"
    }
        
    
}

const user1 = new CreateUser("varun", "verma", "abc@gmail.com", 45, "apna house");
const user2 = new CreateUser("chanel","verma", "abc@gmail.com", 23, "apna ghar");
const user3 = new CreateUser("sanaya", "verma", "abc@gmail.com", 34, "apna ghar");

console.log(user1.about());


class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }
}
class Dog extends Animal{

}
const tommy = new Dog ("tommy", 3);
const Animal1 = new Animal("tom" , 2);
console.log(Animal1);
console.log(Animal1.eat());
console.log(Animal1.isCute())
console.log(tommy)