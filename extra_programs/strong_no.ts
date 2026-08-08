function factorial(n: number): number {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

function isStrong(num: number): boolean {
    let original = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += factorial(digit);
        num = Math.floor(num / 10);
    }

    return sum === original;
}

let number: number = 145;

if (isStrong(number)) {
    console.log(`${number} is a Strong Number`);
} else {
    console.log(`${number} is Not a Strong Number`);
}
