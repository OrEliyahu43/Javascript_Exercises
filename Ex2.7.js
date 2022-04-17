/*
Your task is to create a function that does four basic .
The function should take three arguments - operation(string/char), value1(number),
value2(number).
The function should return result of numbers after applying the chosen operation.
Examples
basicOp('+', 4, 7) // Output: 11
*/

function basicOp(operation,num1,num2){
    let result;
    if(operation==='*'){
        result = num1*num2;
    }
    if(operation==='/'){
        result = num1/num2;
    }
    if(operation==='+'){
        result = num1+num2;
    }
    if(operation==='-'){
        result = num1-num2;
    }
    return result;

}


console.log(basicOp('*',7,5))
console.log(basicOp('/',7,5))
console.log(basicOp('+',7,5))
console.log(basicOp('-',7,5))