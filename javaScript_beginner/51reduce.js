// reduce method

const numbers =[1,2,3,4,5,6];

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue
},0)

console.log(sum);

const userCart = [
    {productId:1 ,product: "mobile", price: 12000},
    {productId:2 ,product: "laptop", price: 22000},
    {productId:3 ,product: "bike", price: 122000},

]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
},0)

console.log(totalAmount);