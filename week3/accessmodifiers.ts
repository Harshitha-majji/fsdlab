class DigitalWallet {
    // PUBLIC: Anyone can see the account holder's name
    public holderName: string;

    // PRIVATE: Only the class logic can access these
    private balance: number;
    private secretPin: number;

    // PROTECTED: Accessible inside this class and child classes
    protected loyaltyPoints: number = 0;

    constructor(name: string, initialDeposit: number, pin: number) {
        this.holderName = name;
        this.balance = initialDeposit;
        this.secretPin = pin;
    }

    // PUBLIC METHOD
    public withdrawMoney(amount: number, enteredPin: number): void {
        if (this.verifyPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`₹${amount} withdrawn successfully. Remaining Balance: ₹${this.balance}`);
            } else {
                console.log("Inadequate funds in your wallet!");
            }
        } else {
            console.log("Incorrect PIN. Transaction declined.");
        }
    }

    // PRIVATE METHOD
    private verifyPin(pin: number): boolean {
        return this.secretPin === pin;
    }
}

// Inheritance to demonstrate PROTECTED
class PremiumWallet extends DigitalWallet {
    public addBonus(): void {
        this.loyaltyPoints += 100;
        console.log(`Bonus added! Total Loyalty Points: ${this.loyaltyPoints}`);

        // ERROR: Cannot access private property
        // this.balance += 500;
    }
}

// ---------------- Execution ----------------

const myWallet = new DigitalWallet("Harshitha majji", 8000, 5678);

// Accessing PUBLIC property
console.log(`Welcome, ${myWallet.holderName}`);

// Using the PUBLIC method
myWallet.withdrawMoney(2500, 5678);
