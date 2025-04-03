// nested destructuring 


const users = [
    {userId: 1, firstName: 'varun', gender: ' male'},
    {userId: 2, firstName: 'tarun', gender: ' male'},
    {userId: 3, firstName: 'swarnamayee', gender: ' male'}
]


const[{firstName}, ,{gender}]= users;
console.log(gender);
console.log(firstName);