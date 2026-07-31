function countOccurrences(arr: number[]): void {
    let frequency: { [key: number]: number } = {};

    for (let num of arr) {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    console.log("Element Occurrences:");

    for (let key in frequency) {
        console.log(`${key}: ${frequency[key]}`);
    }
}

let numbers: number[] = [1, 2, 2, 3, 4, 3, 2, 5, 1];

countOccurrences(numbers);