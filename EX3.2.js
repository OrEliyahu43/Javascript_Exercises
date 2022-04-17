function peopleOnTheBUS(array){
    let currentPeople = 0;
    for(stop of array){
        currentPeople += stop[0];
        currentPeople -= stop[1];
    }           
    return currentPeople;
}

const arrayTest = [[5,0],[12,5],[6,7],[9,6]];
console.log(peopleOnTheBUS(arrayTest));