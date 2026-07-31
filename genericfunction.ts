// <T> tells TypeScript: "This function works with any type T"

// Returns the first element of an array
function getFirstPackage<T>(items: T[]): T {
    return items[0];
}

// Wraps an item inside a delivery box
function wrapInBox<T>(item: T): { parcel: T; timestamp: Date } {
    return {
        parcel: item,
        timestamp: new Date()
    };
}

// ---------------- Usage ----------------

// 1. Working with a list of Fruits (Strings)
const fruits = ["Apple", "Mango", "Orange"];

const firstFruit = getFirstPackage<string>(fruits);
console.log(`First Fruit: ${firstFruit.toUpperCase()}`);

// 2. Working with Roll Numbers (Numbers)
const rollNumbers = [101, 102, 103];

const firstRoll = getFirstPackage<number>(rollNumbers);
console.log(`First Roll Number: ${firstRoll}`);

// 3. Working with Custom Objects (Laptop)
interface Laptop {
    brand: string;
    model: string;
}

const laptop: Laptop = {
    brand: "Dell",
    model: "Inspiron 15"
};

const packedLaptop = wrapInBox<Laptop>(laptop);

console.log(`Packed Item: ${packedLaptop.parcel.brand} ${packedLaptop.parcel.model}`);
console.log(`Packed At: ${packedLaptop.timestamp}`);

// Type Inference
const autoFruit = getFirstPackage(fruits);
console.log(`Auto Inferred First Fruit: ${autoFruit}`);