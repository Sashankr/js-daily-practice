// Aggregation

const arr = [1, 2, 3, 4, 5, 6];

const result = arr.reduce((prev, current, currentIndex, arr) => {
  const next = prev + current;
  return next;
}, 0);

console.log(result);

// Segregation

const arr2 = [1.1, 1.2, 1.3, 2.1, 2.2, 2.3];

const segregatedList = arr2.reduce((prev, current) => {
  const floor = Math.floor(current);
  console.log("floor", floor);
  console.log("prev", prev);

  if (!prev[floor]) {
    prev[floor] = [];
  }
  prev[floor].push(current);
  return prev;
}, {});

console.log(segregatedList);
