// first 100 price  = 100
// 100-200 price = 90
// above 200 price = 70


function layeredDiscountTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        let totalCost = first100Price * quantity;
        return totalCost;
    }

    else if(quantity > 100 && quantity <=200){
        let discountQuantity = quantity - 100;
        let first100Cost = first100Price * 100;
        let second100Cost = second100Price * discountQuantity;
        totalCost = first100Cost + second100Cost;
        return totalCost;
    }

    else{
        discountQuantity = quantity - 200;
        first100Cost = first100Price * 100;
        second100Cost = second100Price * 100;
        let above200Cost = above200Price * discountQuantity;
        totalCost = first100Cost + second100Cost + above200Cost;
        return totalCost;

    }


}

console.log(layeredDiscountTotal(230));