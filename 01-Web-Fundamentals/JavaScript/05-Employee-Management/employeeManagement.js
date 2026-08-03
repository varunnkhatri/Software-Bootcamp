const employeeName = "Varun";
const employeeId = "EMP101";
const department = "Engineering";
const age = 22;
const experience = 3;
const salary = 60000;
const performance = "Excellent";
const isManager = false;
const height = 1.90;
const weight = 90;
const bmi = weight/(height**2);
const isAdult = age>=18;
const isBonusEligible = experience>=2 && performance === "Excellent";
const isRemoteEligible = experience>=5 || isManager;
let salaryStatus;
if (salary>=50000){
salaryStatus = "High Salary";
}
else{
    salaryStatus = "Standard Salary";
}

console.log("====================================");
console.log("EMPLOYEE MANAGEMENT SYSTEM");
console.log("====================================");
console.log(`Name           :     ${employeeName}`);
console.log(`Employee ID    :     ${employeeId}`);
console.log(`Department     :     ${department}`);
console.log(`Age            :     ${age}`);
console.log(`Adult          :     ${isAdult}`);
console.log(`Height         :     ${height}`);
console.log(`Weight         :     ${weight}`);
console.log(`BMI            :     ${bmi.toFixed(2)}`);
console.log(`Bonus          :     ${isBonusEligible}`);
console.log(`Remote Work    :     ${isRemoteEligible}`);
console.log(`Salary Status  :     ${salaryStatus}`);
