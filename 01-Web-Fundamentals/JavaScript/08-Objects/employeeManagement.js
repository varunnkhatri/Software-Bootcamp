const employees = [
    {
        name: "Varun",
        salary: 60000
    },
    {
        name: "Rahul",
        salary: 45000
    },
    {
        name: "Amit",
        salary: 75000
    }
];

employees.forEach(function(employee){
    console.log(`${employee.name} - ${employee.salary}`);
});