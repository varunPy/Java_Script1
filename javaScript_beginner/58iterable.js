// iterables
// jispe hum for of loop laga sakein 
// string, array are iterable


const firstName = "varun"

for(let char of firstName){
    console.log(char);
}

const items = ['item1','item2','item3'];
for( let item of items){
    console.log(item);
}

// array like object
// jinke pas length property hoti hai
// aur jisko hum index se aaccess kar skte ho

// example string


const firstName1 = 'varun';
console.log(firstName1.length);
console.log(firstName[2]);