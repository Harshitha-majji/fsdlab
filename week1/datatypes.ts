let userName:string="Harshitha";
let userAge: number=19;
let userbloodgrp: string="A+";
let userphno: number=9550562232;
let isMember: boolean=true;

console.log("Data type user Name is "+typeof userName);
console.log("Data type user Age is "+typeof userAge);
console.log("Data type user blood grp is " +typeof userbloodgrp);
console.log("Data type user phone no is " +typeof userphno);
console.log("Data type isMember is " +typeof isMember);

function displayUserProfile(name:string,age:number,bloodgrp:string,phoneno:number,active:boolean,): void{
    console.log(`User : ${name}`);
    console.log(`Age : ${age}`);
    console.log(`blood grp: ${bloodgrp}`);
    console.log(`phone no: ${phoneno}`);
    console.log(`Status: ${active ?"active" : "Inactive"}`);
}
displayUserProfile(userName,userAge,userbloodgrp,userphno,isMember);
