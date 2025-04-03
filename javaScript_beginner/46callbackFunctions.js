// callback functions

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`my name is ${name}`);
}

function myFunc(callback){
    console.log("hello i am function and I can...")
    callback("varun");
}

myFunc(myFunc2);