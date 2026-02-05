function maxInArray(arr){
    let highest = -Infinity;
    // let lowest = Infinity;
    let max;
    for(const num of arr){
        if(num > highest){
            max = num;
        }
    }
    return max;
}

let arr = [-2,0,2,3,4,5,6,20,10];
console.log('The maximum number is : ',maxInArray(arr));

function minInArray(arr){
    let min = arr[0];
    for(const num of arr){
        if(num<min){
            min = num;
        }
    }
    return min;
}

console.log('The minimum number is : ',minInArray(arr));