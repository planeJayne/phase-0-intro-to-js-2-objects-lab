const employee =  {
    name:"Jasmin",
    streetAddress: "5501 Glenridge"
};

function updateEmployeeWithKeyAndValue() {
     const newEmployee = {
         name: "Sam",
         streetAddress: "11 Broadway"
     }
    return newEmployee
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key){
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}