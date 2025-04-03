function app (){
    const myfunc = () =>{
        console.log("hello world");
    }

    const addTwo = (num1,num2) =>{
        return num1+num2;

    }

    const mul = (num1, num2)=>{
        return num1*num2
    }
       
    
    console.log("inside app");
    myfunc();
    console.log(addTwo(2,6));
    console.log(mul(5,8));

}
app();