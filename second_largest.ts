function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) {
        return null;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

let numbers: number[] = [12, 35, 1, 10, 34, 1];

let result = findSecondLargest(numbers);

if (result !== null) {
    console.log(`Second Largest Number: ${result}`);
} else {
    console.log("Second Largest Number does not exist.");
}