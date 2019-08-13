// Write a function called countUniqueValues that accpets a sorted array and
// counts the unique values in the array. There can be negative values.
const arr = [-2, -1, -1, 0, 1];

function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j <= arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
}

countUniqueValues(arr);
