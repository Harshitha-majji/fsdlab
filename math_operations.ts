namespace MathOperations {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }

    export function divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

console.log("Addition:", MathOperations.add(10, 5));
console.log("Subtraction:", MathOperations.subtract(10, 5));
console.log("Multiplication:", MathOperations.multiply(10, 5));
console.log("Division:", MathOperations.divide(10, 5));