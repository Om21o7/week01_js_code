console.log("Hello World!");



// Object Literal 
var student = {
    "student Id": 1,
    100: "Hundeered",
    studentName: "John",
    studentAge: 20,
    city: "New York"
}

console.log(student)
console.log(student.studentName)
console.log(student[100])
console.log(student["student Id"])
console.log(typeof student)

for( let key in student){
    console.log('${key} -> ${student[key]}')

}

var emp = {
    empId: 1,
    empName: "John",
    empAge: 20,
    empCity: "New York"
}

// Object Destructing

var{empId,empName,empAge,empCity} = emp
var result = "Pass"
console.log(empId)

var newEmp = {
    empId,
    empName,
    empAge,
    empCity,
    result
}

console.log(newEmp)

var emp1 = {
    ...emp,
    result
}

function welcome(){
    console.log('Welcome to the class');
}

function greet(name){
    console.log('Hello , ${name}');
}

console.log(typeof welcome);
console.log(typeof greet);



