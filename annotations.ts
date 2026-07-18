let stname: string = "Harshitha";
let current_sem: number = 5;
let is_student: boolean = true;

// Function parameter and return type annotations
function getstudentinfo(name: string, sem: number): string {
    return `Student ${stname}} is studying in SVECW, pursuing her semester ${current_sem}.`;
}

// Array annotation (list of strings)
let subjects: string[] = ["Computer Networks","Full Stack Development","Artificial intelligence","EDA","COA"];

// Using the annotated variables and function
const summary: string = getstudentinfo(stname ,current_sem);

console.log(summary);
console.log(`Subjects: ${subjects.join(", ")}`);
console.log(`Is she a student of SVECW ${is_student ? "Yes" : "No"}`);