class BankBranch {
    // STATIC: Shared by all objects
    public static readonly bankName: string = "HDFC Bank";
    public static totalCustomers: number = 0;

    // READONLY: Assigned only once
    public readonly customerId: string;

    public customerName: string;
    public balance: number;

    constructor(name: string, id: string, amount: number) {
        this.customerName = name;
        this.customerId = id;
        this.balance = amount;

        // Increase total customers count
        BankBranch.totalCustomers++;
    }

    // STATIC METHOD
    public static displayBankInfo(): void {
        console.log(`Welcome to ${this.bankName}`);
        console.log("All customers must maintain a minimum balance of ₹10,000.");
    }

    // Instance Method
    public displayCustomerDetails(): void {
        console.log(`Customer Name : ${this.customerName}`);
        console.log(`Customer ID   : ${this.customerId}`);
        console.log(`Balance       : ₹${this.balance}`);
    }
}

// ---------------- Execution ----------------

// Access STATIC members
console.log("Bank Name:", BankBranch.bankName);
BankBranch.displayBankInfo();

// Create customer objects
const customer1 = new BankBranch("Harshitha", "HDFC101", 50000);
const customer2 = new BankBranch("meenakshi", "HDFC102", 75000);

// Display customer details
customer1.displayCustomerDetails();
console.log();
customer2.displayCustomerDetails();
console.log();

// READONLY property
console.log("Customer ID:", customer1.customerId);

// Error: Cannot assign to 'customerId' because it is read-only.
// customer1.customerId = "HDFC999";

// STATIC property
console.log("Total Customers:", BankBranch.totalCustomers);
