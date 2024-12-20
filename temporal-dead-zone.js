function example() {
  // TDZ starts at start of the block
  function getName() {
    console.log(myName); // this is OK
  }
  let myName = "Sas"; // TDZ for myName ends here
  getName();
}

example(); // Sas

console.log("var in tdz", a);
console.log(b); // cannot access b before it is initialized, execution stops here

var a = 10;
let b = 20;

console.log({ a, b });
