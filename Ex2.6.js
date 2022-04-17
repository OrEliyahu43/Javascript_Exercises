/*
The first century spans from the year 1 up to and including the year 100, The second - from the
year 101 up to and including the year 200, etc.
Task :
Given a year, return the century it is in.
Input , Output Examples ::
centuryFromYear(1705) returns (18)
*/


function centuryFromYear(year){
    if(year%100 === 0){
        return year/100;
    }
    else{
       let num = parseInt(year/100)+1;
         return num;
    }
   
}
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));


// let num = parseInt(455/10);
// console.log(num);