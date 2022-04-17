function mask(string){
    let result = '#'.repeat(string.length-4);
    result += string[string.length-4];
    result += string[string.length-3];
    result += string[string.length-2];
    result += string[string.length-1];
    
    return result;
}

let str = "sadsadsadsadsa";
console.log(mask(str));