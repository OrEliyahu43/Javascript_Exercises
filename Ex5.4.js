function toWeirdCase(string){
    let result ='';
    for(let i = 0 ; i<string.length;i++){
        if(string[i] = ' '){
            result += ' ';
        } 
        if(i%2==0){
            result += string[i].toUpperCase();
            
        }
        else{
            result += string[i].toLowerCase();
        }
    }
    return result;
}

console.log(toWeirdCase("shalom ani or"));