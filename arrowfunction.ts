// 1. Traditional Named Function
// Calculates the total semester fee after adding exam fee.
function calculateSemesterFee(fee: number, examFee: number): number {
    return fee+examFee;
}
// 2. Arrow Function
// Performs the same calculation using an arrow function.
const calculateFee = (fee: number, examFee: number): number => {
    return fee + examFee;
};

// 3. Shorthand Arrow Function
// Returns a welcome message.
const welcomeStudent=(name:string):string =>
    `Welcome ${name} to SVECW, Bhimavaram!`;

// -------- Testing --------
const semesterFee: number = 45000;
const examFee: number = 1500;
console.log(welcomeStudent("Harshitha Majji"));
// Using the traditional function
const totalFee1 = calculateSemesterFee(semesterFee, examFee);
console.log(`Total Fee (Traditional): ${totalFee1}`);
// Using the arrow function
const totalFee2 = calculateFee(semesterFee, examFee);
console.log(`Total Fee (Arrow): ${totalFee2}`);

/*
INLINE COMPARISON

Traditional:
function square(num: number): number {
    return num * num;
}

Arrow:
const square = (num: number): number => num * num;
*/