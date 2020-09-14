import { performance } from "perf_hooks";

let randomNumber = Math.floor(Math.random() * (10000 - 1) + 1);
let arr = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

// console.log(arr);

function bubbleSort(arr) {
  const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

const builtInSort = arr => arr.sort((a, b) => a - b);

let t1 = performance.now();
builtInSort(arr);
let t2 = performance.now();
console.log(`Built in sort ${t2 - t1} sec.`);

let t3 = performance.now();
bubbleSort(arr);
let t4 = performance.now();
console.log(`Bubble sort ${t4 - t3} sec.`);
