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

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function reverse(str) {
  return str.split("").reverse().join("");
}

function greet(str) {
  return `Hello ${str}`;
}

const executeFuncList = [convertToUpperCase, reverse, greet];

const result2 = executeFuncList.reduce((prev, next) => {
  return next(prev);
}, "Sashank");

console.log(result2);

function asyncTask(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completing ${time}`);
    }, 100 * time);
  });
}

const promiseList = [asyncTask(3), asyncTask(5), asyncTask(2), asyncTask(7)];

const promiseExecutor = async (promises) => {
  promises.reduce((acc, current) => {
    return acc.then(() => {
      return current.then((data) => {
        console.log(data);
      });
    });
  }, Promise.resolve());
};

promiseExecutor(promiseList);
