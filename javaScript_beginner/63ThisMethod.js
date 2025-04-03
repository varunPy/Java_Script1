// methods 
// method is function inside object 

const person = {
    firstName: "varun",
    age: 34,
    about: function(){
        console.log(`person name is ${this.firstName} age is ${this.age}`);
    }
}

person.about();

function personInfo(){
    console.log(`person name is ${this.firstName} age is${this.age} `)
}

const person1 ={
    firstName: "varun",
    age: 24,
    about: personInfo
}

const person2 = {
    firstName: "tarun",
    age: 28,
    about: personInfo
}

const person3 ={
    firstName: "tanaya",
    age: 34,
    about:  personInfo
}

person1.about();
person2.about();
person3.about();