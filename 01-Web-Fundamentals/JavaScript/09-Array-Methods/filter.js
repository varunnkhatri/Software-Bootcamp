// const numbers = [15, 40, 22, 60, 5, 90];
// const answer = numbers.filter(function(number){
// return number > 30;
// });

// console.log(answer);

const employees = [
    { name: "Varun", salary: 60000 },
    { name: "Rahul", salary: 45000 },
    { name: "Amit", salary: 75000 },
    { name: "Aashi", salary: 30000 }
];

const earning = employees.filter(function(employees){
    return employees.earning >= 50000;
})

console.log(earning);