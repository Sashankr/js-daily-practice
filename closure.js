// nested closure example

function x(a) {
  function y(b) {
    function z(c) {
      return a + b + c;
    }
    return z;
  }
  return y;
}

const res1 = x(10);
const res2 = res1(20);
const res3 = res2(30);

console.log("final result", res3);

// simple closure

function makeAdder(x) {
  function sum(y) {
    return x + y;
  }
  return sum;
}

const addOne = makeAdder(1);
const addTen = makeAdder(10);

console.log(addOne(10)); // addOne has closure over x variable and remembers its value to be 1.
console.log(addTen(10)); // addTen has closure over x variable and remembers its value to be 10.
