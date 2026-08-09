// function printHeader(title) {
//     console.log("=========================");
//     console.log(title);
//     console.log("=========================");
// }
// printHeader("Student Management");


// const students = ["Varun", "Rahul", "Amit", "Aashi"];
// const marks = [85, 9, 93, 90];

// function printStudents(students, marks) {
//     for (let i = 0; i < students.length; i++) {
//         let result = checkPass(marks[i]);

//         console.log("Student" + (i + 1) + ":" + students[i] + "-" + marks[i] + "-" + result);
//     }
// }

// function checkPass(marks) {
//     if (marks >= 40) {
//         return "Pass";
//     }
//     else {
//         return "Fail";
//     }
// }

// printStudents(students, marks);

// const employees = [

//     {
//         id: "EMP001",
//         name: "Varun",
//         salary: 60000
//     },
//     {
//         id: "EMP002",
//         name: "Rahul",
//         salary: 40000
//     },
//     {
//         id: "EMP003",
//         name: "Amit",
//         salary: 75000
//     }
// ];

// function printEmployees(employees){
// for(let i =0; i<employees.length; i++){
//     console.log(`Employee ${i+1}, Name : ${employees[i].name}, Salary : ${employees[i].salary}`)
// }
// }

// printEmployees(employees);


const employees = [
    {
        id: "EMP001",
        name: "Varun",
        department: "Engineering",
        salary: 60000,
        isActive: true
    },
    {
        id: "EMP002",
        name: "Rahul",
        department: "HR",
        salary: 45000,
        isActive: false
    }
];

function printHeader(title) {
    console.log("====================");
    console.log(title)
    console.log("====================");
}
printHeader("Employee Management System")


function getEmployeeStatus(isActive){
if (isActive){
    return ("Active");
}
else{
    return ("Inactive");

}
}
function getSalaryStatus(salary){
    if (salary>=50000){
        return ("High Salary");
    
    }
    else{
        return ("Standard Salary");
    }
}


function printEmployees(employees) {
    for (let i = 0; i < employees.length; i++){
        const isActive = getEmployeeStatus(employees[i].isActive);
        const salaryStatus = getSalaryStatus(employees[i].salary);
        
        console.log(`Employee ${i+1}`);
        console.log(`Name           : ${employees[i].name}`);
        console.log(`Department     : ${employees[i].department}`);
        console.log(`Salary         : ${employees[i].salary}`);
        console.log(`Status         : ${isActive}`);
        console.log(`Salary Status  : ${salaryStatus}`);
        console.log(`============================`);
        
    }

}

printEmployees(employees);