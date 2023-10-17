//SHOW MAJOR
const input_code = "ENG"
let result_name = ""
let result_dept = ""

if("BIOL" == input_code){
    result_name = "Biology"
    result_dept = "Science Bld #310"
}else if("CSCI" = input_code){
    result_name = "Computer Science"
    result_dept = "Sheppard Hall #314"    
}else if("ENG" == input_code){
    result_name = "English"
    result_dept = "Kerr Hall #201"    
}else if("HIST" == input_code){
    result_name = "History"
    result_dept = "Kerr Hall #114"    
}else if("MKT" == input_code){
    result_name = "Marketing"
    result_dept = "Westly Hall #310"    
}else{ //DEFAULT
    result_name = "INVALID CODE"
    result_dept = "INVALID CODE"
}

console.log(result_name, result_dept)