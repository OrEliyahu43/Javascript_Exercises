function fibonacci(n){
    let num1 = 0
    let num2 = 1
    if(n===1) return 0;
    if(n===2) return 1;
    let temp; 
    for(let i =3 ; i<=n ; i++){
        temp = num2;
        num2 = num1+num2;
        num1 = temp;
    }
    return num2;
}


console.log(fibonacci(12));