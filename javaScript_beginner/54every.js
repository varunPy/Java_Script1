// every method 

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "bike", price: 25000},
]

const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);