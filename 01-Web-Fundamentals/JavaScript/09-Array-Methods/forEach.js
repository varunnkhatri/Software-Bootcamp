// const employees = [
//     { name: "Varun", department: "Engineering" },
//     { name: "Rahul", department: "HR" },
//     { name: "Amit", department: "Sales" }
// ];


// employees.forEach(function (employee) {
//     console.log(`Employee : ${employee.name} works in ${employee.department}`)
// });


const employees = [
    {
        id: "EMP001",
        name: "Varun",
        salary: 60000,
        department: "Engineering",
        isActive: true
    },
    {
        id: "EMP002",
        name: "Rahul",
        salary: 45000,
        department: "HR",
        isActive: false
    },
    {
        id: "EMP003",
        name: "Amit",
        salary: 75000,
        department: "Engineering",
        isActive: true
    },
    {
        id: "EMP004",
        name: "Aashi",
        salary: 35000,
        department: "Marketing",
        isActive: true
    }
];

employees.forEach(function(employees){
    console.log(`${employees.name} works in ${employees.department} with salary of ${employees.salary}`)
})
