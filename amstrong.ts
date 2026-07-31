function isArmstrong(num: number): boolean {
    let original = num;
    let sum = 0;

    // Count the number of digits
    let digits = num.toString().length;

    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, digits);
        num = Math.floor(num / 10);
    }

    return sum === original;
}

let number: number = 153;

if (isArmstrong(number)) {
    console.log(`${number} is an Armstrong Number`);
} else {
    console.log(`${number} is Not an Armstrong Number`);
}