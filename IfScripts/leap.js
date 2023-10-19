year = 1600
//three conditions to find out the leap year
// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//     console.log(year + ' is a leap year');
// } else {
//     console.log(year + ' is not a leap year');
// }

let leap = undefined

if (0 == year % 4){
    if(0 != year % 100){
        leap = true;
    }
}
if(0 == year % 400) {
    leap = true
}else{
    leap = false
}
console.log(leap);

//  % modulo/modulus division  AKA remainder
//  && is logical AND
//  || is logical OR

