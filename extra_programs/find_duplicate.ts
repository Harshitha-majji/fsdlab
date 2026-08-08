let numbers: number[] = [1, 2, 3, 2, 4, 5, 1, 6, 3];

console.log("Duplicate Elements:");

for (let i = 0; i < numbers.length; i++) {
    let isDuplicate = false;

    for (let k = 0; k < i; k++) {
        if (numbers[i] === numbers[k]) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate) {
        continue;
    }

    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            console.log(numbers[i]);
            break;
        }
    }
}
