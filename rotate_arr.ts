function rotateLeft(arr: number[], n: number): number[] {
    n = n % arr.length;

    return [...arr.slice(n), ...arr.slice(0, n)];
}

let numbers: number[] = [1, 2, 3, 4, 5];
let n: number = 2;

console.log("Original Array:", numbers);
console.log("Array after Left Rotation:", rotateLeft(numbers, n));