
const array1 =[1,1,1,2,1,1];
const array2 = [0,0,0,0.55,0,0];
function Unique(array){
    let num = array[0];
    for(let i=1 ; i<array.length-1; i++){
    if((num!== array[i]) && (num!== array[i+1])){
        num = num;
    }
    else{
        num = array[i];
    }
    }
    return num;
}

console.log(Unique(array1));
console.log(Unique(array2));