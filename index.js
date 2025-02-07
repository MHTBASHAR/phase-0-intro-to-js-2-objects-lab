// Write your solution in this file!
var employee = {
    name: "Rixone",
    streetAddress: "2800 86th"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value;
        return employee;
}
function  deleteFromEmployeeByKey(employee, key){
    return {
        ...employee[key],
    }
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key];
   return employee;
}