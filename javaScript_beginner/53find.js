// find method

const users = [
    {userId : 1, userName: "Varun"},
    {userId : 2, userName: "varu"},
    {userId : 3, userName: "tanya"},
    {userId : 4, userName: "mohit"},

];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);