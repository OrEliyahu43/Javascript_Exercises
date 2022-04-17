function abbrevivate(string){
    let words = string.split('');
    let result = words[0].toUpperCase() +"." + words[1].toUpperCase();
    return result;
}

console.log(abbrevivate("Patrick Feeney"));