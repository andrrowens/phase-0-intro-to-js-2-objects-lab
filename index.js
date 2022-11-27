// Write your solution in this file!


let employee = {
    name: "John Jones",
    streetAddress: "123 John Street Denver, CO 80220",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...employee}
    newObj[key] = value
    return newObj
}

updateEmployeeWithKeyAndValue(employee, "Sam", "11 Broadway")


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "Sam", "12 Broadway")



function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = delete newObj.name
    return newEmployee
}
