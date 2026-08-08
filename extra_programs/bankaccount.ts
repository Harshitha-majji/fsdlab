class BankAccount {
    accountHolder: string;
    balance: number;

    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ₹${amount}`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient Balance");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn: ₹${amount}`);
        }
    }

    displayBalance(): void {
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Current Balance: ₹${this.balance}`);
    }
}

let account = new BankAccount("Harshitha", 5000);

account.displayBalance();

account.deposit(2000);

account.withdraw(1500);

account.displayBalance();
