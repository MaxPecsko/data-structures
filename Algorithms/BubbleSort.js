// Bubble Sort algorithm is a sorting algorithm where tha largest values
// buuble up to the top.
function bubbleSort(arr) {
  // Helper function that'll swap the elements of the array if a > b
  const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
  // In the first loop we'll iterate through the whole array decreasing the length on each completed cycle
  for (let i = arr.length; i > 0; i--) {
    // In the second loop we'll compare element with an upcoming one and call the swap
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
}

bubbleSort([35, 24, 11, 64, 21]);
