class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public displayDetails(): void {
        console.log("Employee Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        console.log("Department:", this.department);
    }
}

let emp = new Employee("Harshitha", 50000, "AI & DS");

console.log(emp.name);      // Accessible (public)
// console.log(emp.salary); // Error: private
// console.log(emp.department); // Error: protected

emp.displayDetails();

let manager = new Manager("Rahul", 70000, "HR");
manager.showDepartment();
