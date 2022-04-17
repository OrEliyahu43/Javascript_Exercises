function accum(string){
    let result = string[0].toUpperCase();
    for(let i=1 ; i<string.length;i++){
        let str ='';
        str = "-" + string[i].toUpperCase() + string[i].repeat(i);
        result += str;
    }
    return result;

}

console.log(accum("abcd"));
