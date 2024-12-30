{
  var variableName = "Sashank";
  let letName = "Sashank";
  let constName = "Sashank";
  console.log("In Scope Access for letName", letName);
}

console.log(variableName); // Sashank
console.log(letName); // Reference Error : letName is not defined,
console.log(constName); // same error Reference Error, but this line is not executed since there is an error in the line above.
