function tdz() {
  console.log(a, b, c); // undefined, cannot access b before its initialized

  const c = 10;
  let b;
  var a = 10;
}

tdz();
