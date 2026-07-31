// 1. Parameter & Return Types (Explicit)
// This function takes a string and returns a string
function introduce(name: string): string {
    return `Hello! I am ${name}.`;
}
// 2. Default Parameters
// If 'college' is not provided, it defaults to SVECW, Bhimavaram
function getCollege(college: string = "SVECW, Bhimavaram"): string {
    return `College: ${college}`;
}
// 3. Optional Parameters (using ?)
// 'goal' can be skipped while calling the function
function aboutMe(name: string, goal?: string): void {
    console.log(`Name: ${name}`);

    if (goal) {
        console.log(`Goal: ${goal}`);
    }
}
// 4. REST Parameters (using ...)
// Accepts multiple marks and returns the total
function calculateTotalMarks(...marks: number[]): number {
    return marks.reduce((total, current) => total + current, 0);
}

// -------- Testing --------
console.log(introduce("Harshitha Majji"));
console.log(getCollege()); // Uses default value
console.log(getCollege("Shri Vishnu Engineering College for Women, Bhimavaram"));
aboutMe("Harshitha Majji"); // Optional parameter omitted
aboutMe("Harshitha Majji", "To become a Software Engineer"); // Optional parameter provided
const total = calculateTotalMarks(85, 90, 88, 95);
console.log(`Total Marks: ${total}`);