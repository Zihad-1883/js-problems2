const products = [
    {name : 'shampoo', price : 300, quantity : 2},
    {name : 'chiruni', price : 100, quantity : 3},
    {name : 'shirt', price : 700, quantity : 5},
    {name : 'pant', price : 1200, quantity : 1},
]

function totalCost(){
    let total = 0;
    let eachPrice;
    for(const product of products){
        eachPrice = product.price * product.quantity;
        total += eachPrice;
    }
    return total;
}

console.log(totalCost());