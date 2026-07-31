function isPerfect(num: number): boolean {
    if (num <= 1) {
        return false;
    }

    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

let number: number = 28;

if (isPerfect(number)) {
    console.log(`${number} is a Perfect Number`);
} else {
    console.log(`${number} is Not a Perfect Number`);
}