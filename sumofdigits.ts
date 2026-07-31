function sumOfDigits(num: number): number {
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }

    return sum;
}

let number: number = 12345;

console.log(`Sum of digits of ${number} is ${sumOfDigits(number)}`);