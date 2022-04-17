function shortest(string){
    words = string.split(' ');
    let shortIndex = 0;
    for(let i =1 ; i <words.length;i++){
        if(words[i].length<words[shortIndex].length){
            shortIndex = i;
        }
    }
    return words[shortIndex];
}


console.log(shortest("dsadsadsa dsadsa ds dsadsadsadsadsa"));