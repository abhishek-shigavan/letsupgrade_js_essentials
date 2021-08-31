const prompt = require('prompt-sync')();

let num1 =+ prompt("Enter 1st Number : ");
let num2 =+ prompt("Enter 2nd Number : ");

console.log(`Result of Calculations Perform on ${num1} and ${num2}`);
let add = num1 + num2;
console.log(`Addition : ${num1} + ${num2} = ${add}`);

let sub = num1 - num2;
console.log(`Substraction : ${num1} - ${num2} = ${sub}`);

let mul = num1 * num2;
console.log(`Multiplication : ${num1} * ${num2} = ${mul}`);

let div = num1 / num2;
console.log(`Division : ${num1} / ${num2} = ${div}`);

let mod = num1 % num2;
console.log(`Mod : ${num1} % ${num2} = ${mod}`);

let sq1 = num1 * num1;
console.log(`Square of : ${num1} = ${sq1}`);

let sq2 = num2 * num2;
console.log(`Square of : ${num2} = ${sq2}`);

let cu1 = sq1 * num1;
console.log(`Cube of : ${num1} = ${cu1}`);

let cu2 = sq2 * num2;
console.log(`Cube of : ${num2} = ${cu2}`);