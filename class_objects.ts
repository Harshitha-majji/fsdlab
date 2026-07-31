// 1_class_objects.ts

class FixedDeposit {
    // 1. Properties (Fields)
    public customerName: string;
    public principalAmount: number;
    public interestRate: number;
    public tenureYears: number;
    // 2. Constructor Overloading

    // Signature 1
    constructor(name: string, amount: number);

    // Signature 2
    constructor(name: string, amount: number, rate: number, years: number);

    // Implementation
    constructor(name: string, amount: number, rate?: number, years?: number) {
        this.customerName = name;
        this.principalAmount = amount;

        // Default values
        this.interestRate = rate ?? 7.0;
        this.tenureYears = years ?? 2;
    }

    // 3. Method to calculate maturity amount
    public calculateMaturity(): number {
        const interest =
            (this.principalAmount * this.interestRate * this.tenureYears) / 100;

        return this.principalAmount + interest;
    }

    // Method to display details
    public displayDetails(): void {
        console.log("----- Fixed Deposit Details -----");
        console.log(`Customer Name : ${this.customerName}`);
        console.log(`Principal     : ₹${this.principalAmount}`);
        console.log(`Interest Rate : ${this.interestRate}%`);
        console.log(`Tenure        : ${this.tenureYears} year(s)`);
        console.log(`Maturity Amt  : ₹${this.calculateMaturity()}`);
        console.log("---------------------------------\n");
    }
}

// -------- Using the Class --------

// Scenario 1: Default constructor
const fd1 = new FixedDeposit("Ravi Teja", 80000);

// Scenario 2: Overloaded constructor
const fd2 = new FixedDeposit("Sneha Reddy", 150000, 8.25, 4);

// Display details
fd1.displayDetails();
fd2.displayDetails();

// 4. Updating a property after object creation
fd2.principalAmount = 170000;

console.log(
    `Updated Maturity for ${fd2.customerName}: ₹${fd2.calculateMaturity()}`
);