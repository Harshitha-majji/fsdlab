class Student {
    readonly studentId: number;
    name: string;
    course: string;

    constructor(studentId: number, name: string, course: string) {
        this.studentId = studentId;
        this.name = name;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
        console.log("Course:", this.course);
    }
}

let student = new Student(101, "Harshitha", "AI & DS");

student.displayDetails();

// student.studentId = 102; // Error: Cannot assign to 'studentId' because it is a read-only property.
