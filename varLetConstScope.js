function variableScope() {
  {
    var variableName = "Sashank";
    let letName = "Sashank";
    let constName = "Sashank";
    console.log("In Scope Access for letName", letName);
  }

  console.log(variableName); // Sashank
  console.log(letName); // Reference Error : letName is not defined,
  console.log(constName); // same error Reference Error, but this line is not executed since there is an error in the line above.
}

function greet() {
  let text = "hello";
  if (true) {
    let text = "hi";
    console.log(text);
  }
  console.log(text); // no change in the outer scope
}

function illegalShadowing() {
  var a = 10;
  let b = 20;

  if (true) {
    let a = 100;
    var b = 200; // identifier b has already been declared, cannot redeclare block scoped variable b.
    console.log(a);
    console.log(b);
  }
  console.log(a);
  console.log(b);
}

// variableScope();
// greet();

illegalShadowing();
