// how to iterate object

const person = {
    name: "varun",
    age: "30",
    "person hobbies": ["guitar","sleeping", "music"]
}

// for in loop

for(let key in person){
    //console.log(`${key}: ${person[key]}`)
    console.log(key, ":", person[key]);
}

console.log(Object.keys(person))


// for

for(let key of Object.keys(person)){
    console.log(person[key]);
}