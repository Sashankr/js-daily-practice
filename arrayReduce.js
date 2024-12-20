/*
Array reduce accepts an initial value, it starts with initial value and then the returned value from the last call in same 
function 
Syntax

arr.reduce((prevValue,currentValue,currentIndex,array)=> {
        const next = prevValue + currentValue;
        return next
    })

    prevValue - the value returned from last call of function or initial value in first iteration
    currentValue - current value of array.
    currentIndex - current index of array.
    array - the array itself

*/

// Aggregation
// sum of all numbers in array

let arr = [1, 2, 3, 4, 5, 6];

const result = arr.reduce((prev, current, index, arr) => {
  const next = prev + current;
  return next;
}, 0);

console.log(result);
