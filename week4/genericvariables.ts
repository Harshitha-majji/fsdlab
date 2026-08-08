// <T> is a placeholder for a type.

class Locker<T> {
    private contents: T;

    constructor(initialItem: T) {
        this.contents = initialItem;
    }

    // Returns the generic type T
    public getItem(): T {
        console.log("Accessing locker...");
        return this.contents;
    }

    // Accepts a new item of type T
    public depositItem(newItem: T): void {
        this.contents = newItem;
        console.log("Locker updated successfully.");
    }
}

// ---------------- Usage ----------------

// 1. Using it for Cash (Number)
const cashLocker = new Locker<number>(10000);

let cash = cashLocker.getItem();
console.log(`Current Balance: ₹${cash}`);

cashLocker.depositItem(15000);
console.log(`Updated Balance: ₹${cashLocker.getItem()}`);

// 2. Using it for Documents (String)
const documentLocker = new Locker<string>("Passport and Driving License");

console.log(`Stored Document: ${documentLocker.getItem()}`);

documentLocker.depositItem("House Registration Papers");
console.log(`Updated Document: ${documentLocker.getItem()}`);

// 3. Using it for a Custom Object (Jewellery)
interface Gold {
    weightGrams: number;
    purity: string;
}

const goldLocker = new Locker<Gold>({
    weightGrams: 75,
    purity: "22K"
});

const myGold = goldLocker.getItem();

console.log(`Gold Weight: ${myGold.weightGrams}g`);
console.log(`Gold Purity: ${myGold.purity}`);

// ERROR DEMO
// cashLocker.depositItem("Gold Coin");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
