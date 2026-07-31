class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Value:", this.value);
    }
}

// Box for number
let numberBox = new Box<number>(100);
numberBox.display();

// Box for string
let stringBox = new Box<string>("Hello TypeScript");
stringBox.display();

// Box for boolean
let booleanBox = new Box<boolean>(true);
booleanBox.display();