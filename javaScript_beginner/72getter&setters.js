// getter and setters

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get  fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split (" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("varun", "verma", 5);

console.log(person1.fullName);

person1.fullName = "chanel verma";

console.log(person1);
