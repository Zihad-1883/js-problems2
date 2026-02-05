function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}


function calculator(a,b,operation){
   
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log('Please provide valid numbers');
    }

    else if(typeof operation !== 'string'){
        console.log("Please provide a valid operation name. Only 'add', 'subtarct', 'multiply' and 'divide' is allowed")
    }

    else{

        if(operation === 'add'){
            return add(a,b);
        }
        else if(operation === 'subtract'){
            return subtract(a,b);
        }
        else if(operation === 'multiply'){
            return multiply(a,b);
        }
        else if(operation === 'divide'){
            return divide(a,b);
        }
        else{
            return "Please provide a valid operation name. Only 'add', 'subtarct', 'multiply' and 'divide' is allowed";
        }
    }
 
}

console.log(calculator(2,2,'divide'));