// nested if else

let winningNumber = 19;
let userGuess = +prompt("guess a number")

if(userGuess === winningNumber){
    console.log("your guess is right..");
}else{
    if(userGuess < winningNumber){
        console.log("to low..");
    }else{
        console.log("too high");
    }
}