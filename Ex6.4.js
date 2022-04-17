function isIsogram(string){
    let isogram = true;;
    for(let i =0 ; i<string.length;i++){
        if(isIsogram === false){
            break;
        }
        let char = string[i].toLowerCase();  
            for(let j=i+1 ; j<string.length;j++){
                if(char===string[j].toLowerCase()){
                    isogram = false;
                    break;
                }
               
            }
    }
    return isogram;
}


console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("Dermatoglyphics"));