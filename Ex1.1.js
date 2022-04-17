function YesOrNo(boolean){
    if(boolean){
        return "YES";
    }
    return "NO";
   
}

let boolean = 3+5===8;
console.log(YesOrNo(true));
console.log(YesOrNo(false));
console.log(YesOrNo(boolean));

