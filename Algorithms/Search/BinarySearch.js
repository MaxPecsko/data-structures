// Search for the value using Divide and Conquer Pattern (splits the array into subarrays under the certain condition).

// O(log n)
function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  // Middle of the array. We'll reasign it on each cycle as we make an array shorter.
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === value ? middle : -1;
}

binarySearch([1, 2, 3, 4, 5, 6], 7);
