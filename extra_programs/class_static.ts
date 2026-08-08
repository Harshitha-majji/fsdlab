class Student {
    static collegeName: string = "SVECW";

    name: string;
    rollNo: number;

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("College:", Student.collegeName);
    }

    static displayCollege(): void {
        console.log("College Name:", Student.collegeName);
    }
}

let student1 = new Student("Harshitha", 101);
let student2 = new Student("Rahul", 102);

student1.displayDetails();
student2.displayDetails();

Student.displayCollege();
