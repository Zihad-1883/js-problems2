const phones = [
     object1 = {  phoneName : 'Samsung', price : 18000 },
     object2 = {  phoneName : 'apple', price : 12000 },
     object3 = {  phoneName : 'realme', price : 10000 },
     object4 = {  phoneName : 'vivo', price : 13000 },
     object5 = {  phoneName : 'oppo', price : 14000 }
]

function minFromObject(){
    let min = phones[0].price;
    let name;
    for(const phone of phones){
        if(phone.price < min){
            min = phone.price;
            name = phone.phoneName;
        }
    }
    console.log('The cheapest phone is : ', name)
    return min;
}

console.log(minFromObject(phones));





console.log('-------------------------------------');





// function minFromObject(){
//     let min = phones[0];
    
//     for(const phone of phones){
//         if(phone.price < min.price){
//             min = phone;
//         }
//     }
//     return min;
// }

// console.log(minFromObject(phones));