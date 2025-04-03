// call method


function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician)


}

const person1 = {
    firstName: " varun",
    age: 9
}

const person2 ={
    firstName: "sanaya",
    age: 10
}

about.call(person1, "Harmonium", "Apna Rangila Band");

// call and apply methods are same but core diffrence is in apply method args passed in array [""];


about.apply(person2, [" guitar", "mastana Band"])

// bind method return function (when you want output then call function);


const func = about.bind(person2, "tabla", "raju band");

func();


// immportant don't do this mistake

const user1 = {
    firstName: "varun",
    age: 23,
    about: function(){
        console.log(this.firstName, this.age);
    }
}

// store about value in another function 

const myFunc = user1.about.bind(user1) // () always pass parameters in () important avoid mistake

 myFunc();


 const user2 = {
    firstName: "chanel",
    age: 6,

    // short syntax
    about() {
        console.log(this.firstName, this.age);
    }
 }

 user2.about();