function printHeader(title){
    console.log("=========================");
    console.log(title);
    console.log("=========================");
}
printHeader("Student Management");


const students = ["Varun", "Rahul", "Amit", "Aashi"];
const marks = [85, 90, 93, 9];

function printStudents(students, marks) {
    for (let i = 0; i < students.length; i++) {
        let result = checkPass(marks[i]);
        
        console.log("Student" + (i + 1) + ":" + students[i] + "-" + marks[i] + "-" + result);
    }
}

function checkPass(marks) {
    if (marks>=40){ 
        return "Pass";
    }
    else{
        return "Fail";
    }
}
printStudents(students, marks);