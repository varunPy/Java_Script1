// maps 
// map is an iterable 

// store data in orderd fashion 

// store key value pair (like Object)
//duplicate keys are not allowed like objects 

// difference between map and objects 
// objects can only have string or symbol as key 
// in maps you can use anything as key 
// like array, number , string 
// object literal 
// key --> string
// key --> symbol
// map store key value pair 

const person =  new Map();
person.set('firstName', 'varun');
person.set('age', 26);

console.log(person);
console.log(person.get('firstName'));
console.log(person.get('age'));
//console.log(person.keys());

for(let key of person.keys()){
    console.log(key, typeof key);
}

for(let [key, value] of person){
    console.log(key,value);
}

const person1 = {
    id: 1,
    firstName: "varun"
}

const person2 = {
    id: 2,
    firstName: "Mahadev"
}

const extraInfo = new Map();
extraInfo.set(person1, {age:9, gender: "male"});
extraInfo.set(person2, {age:10, gender: "female"});

console.log(person1.id);
console.log(person2.id);

console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);