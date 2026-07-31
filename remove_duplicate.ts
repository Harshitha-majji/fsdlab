function removeDuplicates(str: string): string {
    let result = "";

    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }

    return result;
}

let text: string = "programming";

console.log("Original String:", text);
console.log("After Removing Duplicates:", removeDuplicates(text));