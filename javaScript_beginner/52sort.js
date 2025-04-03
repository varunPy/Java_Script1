// sort

const numbers = [5,9,1200,410,3000];

numbers.sort((a,b)=>{
    return a-b;
});

console.log(numbers);

const products =[
    {productId: 1, productName: "mobile", price: 300},
    {productId: 1, productName: "mobile", price: 900},
    {productId: 1, productName: "mobile", price: 600},
    {productId: 1, productName: "mobile", price: 800},
    {productId: 1, productName: "mobile", price: 5000},
]

// lowToHigh

const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
});

console.log(lowToHigh);
const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});

console.log(highToLow);