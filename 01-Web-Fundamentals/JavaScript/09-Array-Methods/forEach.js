const employees = [
    { name: "Varun", department: "Engineering" },
    { name: "Rahul", department: "HR" },
    { name: "Amit", department: "Sales" }
];


employees.forEach(function(employee){
 console.log(`Employee : ${employee.name} works in ${employee.department}`)   
});