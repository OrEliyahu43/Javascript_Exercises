function duplicates(string){
    let numOfDuplicates = 0;
    let charCount =[];
    for(let i =0 ; i<string.length;i++){
        let char = string[i].toLowerCase();
        if(!charCount.includes(char)){
            for(let j=i+1 ; j<string.length;j++){
                if(char===string[j].toLowerCase() && !charCount.includes(char)){
                    numOfDuplicates += 1;
                    charCount.push(char);
                }
            }
        }
    }
    return numOfDuplicates;
}


console.log(duplicates("aabbcde"));
console.log(duplicates("Indivisibilities"))
console.log(duplicates("indivisibility"))