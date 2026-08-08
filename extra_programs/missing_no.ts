function findMissingNumber(arr: number[], n: number): number {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let num of arr) {
        actualSum += num;
    }

    return expectedSum - actualSum;
}

let numbers: number[] = [1, 2, 3, 5];
let n: number = 5;

console.log("Missing Number:", findMissingNumber(numbers, n));
