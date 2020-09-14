// Bubble Sort algorithm is a sorting algorithm where tha largest values
// buuble up to the top.

// O(n^2)
function bubbleSort(arr) {
  const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]); // Helper function that'll swap the elements of the array if a > b
  for (let i = arr.length; i > 0; i--) {
    // In the first loop we'll iterate through the whole array decreasing the length on each completed cycle
    let noSwaps = true; // Variable that will break the loop if the array has benn sorted
    for (let j = 0; j < i - 1; j++) {
      // In the second loop we'll compare element with an upcoming one and call the swap
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([35, 24, 11, 64, 21]);
