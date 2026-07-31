const employeeName = "Varun";
const employeeId = "EMP121";
const department = "Engineering";
const height = 1.9;
const weight = 90;
const bmi = weight/(height*height);
const age = 22;
const isAdult = age>=18;

console.log("---------------------------------")
console.log("Employee Card + Bmi + Age Checker")
console.log("---------------------------------")
console.log(`Name        : ${employeeName}`);
console.log(`Employee ID : ${employeeId}`);
console.log(`Department  : ${department}`);
console.log(`Height      : ${height} m`);
console.log(`Weight      : ${weight} kg`);
console.log(`BMI         : ${bmi.toFixed(2)}`);
console.log(`Adult       : ${isAdult}`);
