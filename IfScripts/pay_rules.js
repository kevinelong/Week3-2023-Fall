
// INPUT PARAMETERS
const payRate = 17.3
const hoursWorked = 45

// OUTPUT RETURNED
let pay = 0

//IS REGULAR?
if(hoursWorked <= 40){
    pay = payRate * hoursWorked;
}else{
    standardPay = payRate * 40;
    overtimeHours = hoursWorked - 40
    overtimeRate = payRate * 1.5
    overTimePay = overtimeHours * overtimeRate
    pay = standardPay + overTimePay
}

console.log(pay)