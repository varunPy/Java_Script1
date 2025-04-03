function singSong(){
    console.log("happy birthday");
}

singSong();

function add(){
    console.log(2+4);
}
add();



function sum(num1, num2){
    return num1 + num2;
}

const returnValue = sum(5,6);
console.log(returnValue);



function even(number){
    if(number% 2===0){
        return true;
    }
    return false;

}

console.log(even(4));


function isEven(number){
    return number % 2 === 0;
}
console.log(isEven(6));



function firstChar(anyString){
    return anyString[0];
}
console.log("abc");


// function
// input : array, target (number)
// output: index of target if target present in array

function findTarget(array ,target){
    for(let i = 0; i<array.length; i++){
        if(array[i]=== target){
            return i;
        }
    }
    return -1;
}

const myArray = [1,4,8,3,9]
const ans = findTarget(myArray, 4);
console.log(ans);

//function expression

const singBirthday = function(){
    console.log("happy birthday");
}

singBirthday();
