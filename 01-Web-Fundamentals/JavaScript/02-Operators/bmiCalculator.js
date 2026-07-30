const name = "Varun";
const height = 1.90;
const weight = 90;
const bmi = weight / (height ** 2);

console.log(`==========================`)
console.log(`      BMI Calculator      `)
console.log(`==========================`)
console.log(`Name         :   ${name}`);
console.log(`Height       :   ${height} m`);
console.log(`Weight       :   ${weight} kg`);
console.log(`BMI          :   ${bmi.toFixed(2)}`);