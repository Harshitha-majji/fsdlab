let mysteryValue: unknown = "Welcome to svecw";
if (typeof mysteryValue == "string") {
    console.log("Length of unknown string: " + mysteryValue.length);
}

function aboutMe(content: string): void {
    console.log("HELLO,  " + content);
}
aboutMe("I am Harshitha Majji, a B.Tech student passionate about technology and programming. I enjoy learning web development, data structures, and solving coding problems. I am eager to improve my skills and build innovative software projects.");

let data: any = 10;
console.log(data);

data = "Now I am in FSD lab";
console.log(data);

data = true;
console.log(data);