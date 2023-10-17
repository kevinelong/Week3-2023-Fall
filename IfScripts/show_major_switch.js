//SHOW MAJOR
const input_code = "ENG"
let result_name = ""
let result_dept = ""

switch(input_code){
    case "BIOL" :
        result_name = "Biology"
        result_dept = "Science Bld #310"
        break
    case "CSCI":
        result_name = "Computer Science"
        result_dept = "Sheppard Hall #314" 
        break   
    case "ENG":
        result_name = "English"
        result_dept = "Kerr Hall #201"   
        break 
    case "HIST":
        result_name = "History"
        result_dept = "Kerr Hall #114"  
        break  
    case "MKT":
        result_name = "Marketing"
        result_dept = "Westly Hall #310"    
        break
    default:
        result_name = "INVALID CODE"
        result_dept = "INVALID CODE"
        break
}

console.log(result_name, result_dept)