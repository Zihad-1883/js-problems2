    // laptop = 35000 tk
    // tablet = 15000 tk
    // mobile = 20000 tk
    

function budget(laptop,tablet,mobile){

    let laptopPrice = 35000;
    let tabletPrice = 15000;
    let mobilePrice = 20000;

    let laptopCost = laptopPrice * laptop;
    let tabletCost = tabletPrice * tablet;
    let mobileCost = mobilePrice * mobile;

    let total = laptopCost + tabletCost + mobileCost;
    return total;


}

let laptop = 1;
let tablet = 2;
let mobile = 3;
console.log(budget(laptop,tablet,mobile));