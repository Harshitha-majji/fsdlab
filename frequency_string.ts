function countFrequency(str: string): void {
    let frequency: { [key: string]: number } = {};

    for (let char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    console.log("Character Frequencies:");

    for (let char in frequency) {
        console.log(`${char}: ${frequency[char]}`);
    }
}

let text: string = "programming";

countFrequency(text);