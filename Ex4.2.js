function tribonacci(array,n){
    if(n===0) return [];
    if(n===1) return array[0];
    if(n===2) return array[1];
    if(n===3) return array[2];

    let num1 = array[0];
    let num2 = array[1];
    let num3 = array[2];
    let temp1,temp2;
    for(let i = 4 ; i<=n ; i++){
        temp1 = num2;
        temp2 = num3;
        num3 = num3 + num2 + num1;
        num2 = temp2;
        num1 = temp1;
    }
    return num3;
}

const arrayTest = [1,1,1];
const arrayTest2 = [0,0,1];
console.log(tribonacci(arrayTest2,8));