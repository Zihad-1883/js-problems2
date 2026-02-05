// shirt = 500
// shoe = 900
// pant = 400



function costTotal(shirtQuantity,shoeQuantity,pantQuantity){
    let shirtPrice = 500;
    let shoePrice = 900;
    let pantPrice = 400;


    let shirtTotal = shirtQuantity * shirtPrice;
    let shoeTotal = shoeQuantity * shoePrice;
    let pantTotal = pantQuantity * pantPrice;

    let totalCost = shirtTotal + shoeTotal + pantTotal;

    return totalCost;
}

let ans = costTotal(2,1,3);
console.log(ans);