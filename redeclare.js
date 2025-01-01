// Only variables declared with var can be redeclared in the same scope. let and const cannot.
// const cannot be declared without an initializer

var a;
var a;

let b; // identifier b already declared.
let b;

const c; // missing initializer in const declaration.
const c;