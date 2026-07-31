function findGCD(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let num1: number = 12;
let num2: number = 18;

let gcd = findGCD(num1, num2);
let lcm = (num1 * num2) / gcd;

console.log(`GCD of ${num1} and ${num2} is ${gcd}`);
console.log(`LCM of ${num1} and ${num2} is ${lcm}`);