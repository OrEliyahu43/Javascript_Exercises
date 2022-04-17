function findNextSquare(num){
    let num1 = Math.sqrt(num);
    if(Number. isInteger(num1)){
        return Math.pow((num1+1),2);
    }
    else{
        return -1;
    }
}

console.log(findNextSquare(114));