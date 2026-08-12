
// const employees = [
//     {
//         id: "EMP001",
//         name: "Varun",
//         salary: 60000,
//         department: "Engineering",
//         isActive: true
//     },
//     {
//         id: "EMP002",
//         name: "Rahul",
//         salary: 45000,
//         department: "HR",
//         isActive: false
//     },
//     {
//         id: "EMP003",
//         name: "Amit",
//         salary: 75000,
//         department: "Engineering",
//         isActive: true
//     },
//     {
//         id: "EMP004",
//         name: "Aashi",
//         salary: 35000,
//         department: "Marketing",
//         isActive: true
//     }
// ];

// console.log("=============================");
// console.log("1. Print every employee's name using forEach().");
// console.log("=============================");
// employees.forEach(function(employees){
//     console.log(`${employees.name} works in ${employees.department} with salary of ${employees.salary}`)
    
// })

// console.log("=============================");
// console.log("2. Create a new array containing only employee names using map().");
// console.log("=============================");

// const names = employees.map(function(employees){

//     return employees.name;
// })
// console.log(names);
// console.log("=============================");
// console.log("3. Filter employees earning at least ₹50,000.");
// console.log("=============================");

// const latest = employees.filter(function(employees){
//     return employees.salary >= 50000;
// })
// console.log(latest);

// console.log("=============================");
// console.log("4. Find the first employee from the HR department.");
// console.log("=============================");
// const first = employees.find(function(employees){
//     return employees.department === "HR";
// })
// console.log(first);

// console.log("=============================");
// console.log("5. Find the first inactive employee.");
// console.log("=============================");

// const inactive = employees.find(function(employees){
//     return employees.isActive === false;
// })

// console.log(inactive);



const numbers = [10,20,30];

const result = numbers.forEach(function(number){
    console.log(number);
});