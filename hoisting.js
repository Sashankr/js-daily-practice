/* To understand hoisting we need to understand execution concept of JS
It has 2 phases
1. Creation phase : where the variables and functions are hoisted to top of the scope.
2. Execution phase : where the code is executed line by line.
*/

console.log(a);
var a;

console.log(b);
let b;

// console.log(c); //Cannot access 'c' before initialization
// const c = 10;

// The variables b and c are hoisted but they are in temporal deadzone, meaning they are in scope but not yet initialized
