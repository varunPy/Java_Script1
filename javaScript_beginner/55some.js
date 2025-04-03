// some method 

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "bike", price: 25000},
    {productId: 4, productName: "macbook", price: 250000}

]

const ans = userCart.some((cartItem)=>cartItem.price > 100000);

console.log(ans);