let num1 = 5;
let num2 = 7;
let num3 = 4;

function maxNum(){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const ans = maxNum(num1,num2,num3);
console.log(ans);

let max = Math.max(num1,num2,num3);
console.log(max);
