function sumLowestNumbers(array){
    let min1= array[0];
    let min2= array[1];
    let temp;
    if(min1>min2){
        temp = min1;
        min1 = min2;
        min2 = temp;
    }
    for(let i=2 ;i<array.length;i++){
        const num = array[i];
        if(num<min1){
            temp = min1;
            min1 = num;
            min2 = temp;
        }
        else if(num<min2){
            min2 = num;
        }
    }
    return min1+min2;


}

const array1 = [6,7,8,3,2,66,7,5,4];
console.log(sumLowestNumbers(array1));