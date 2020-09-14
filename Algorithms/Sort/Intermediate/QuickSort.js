/*
  Quick sort algorithm works by getting pivot in the array (any element) and finding the right
  index for that pivot in the array. After that it recursively does the same on the subarrays taken from the elements
  on the left and right side from the pivot. It breaks the array down until it gets to the subarray with one element.
  (Same principal as merge sort)
  Takes advantage of the fact that 1 elements arrays are always sorted.
*/
// Helper function for pivot
/*
  Take the element of the arr at the start idx (pivot) and finds the right
  position for pivot in the array by swaping elements that are greater to the right side of the pivot
  and elements the are lower to the left side of the pivot.

  Returns the swap index for the pivot.

  @pivot -> the element to sort
  @swapIndex -> index at which we need to swap the pivot
*/
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  };

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    // If pivot is greater that element at i increase the swap index and move element at i to the right of the pivot
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  /* When all the elements are swaped next to the pivot swap the pivot with the el at swapIndex
    to place all of the elements that are lower then pivot to the left and the greater ones to the right */
  swap(arr, start, swapIndex);
  return swapIndex;
}

// pivot([8, 2, 7, 1, 3, 6, 5]);

/* 
  Quick Sort calls pivot helper function find the right position for our pivot el
  and then calls itself recursively on a subarrays that are based on element on the right and left side
  from the pivot
*/
function quickSort(arr, left = 0, right = arr.length - 1) {
  // Base Case
  if (left < right) { 
    let pivotIndex = pivot(arr, left, right);
    // Left
    quickSort(arr, left, pivotIndex - 1);
    // Right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([4, 8, 2, 7, 1, 3, 6, 5])  //?


/*
  Summary 

  Time Complexity (Best): O(n log n)
  Time Complexity (Average): O(n log n)
  Time Complexity (Worst): O(n^2)
  Space Complexity: O(n log n)

  Works the worst if the array is already sorted or if we're picking the min/max value couple of times in the row
  To minimize the chansec of picking those values we can either choose the random or middle pivot in the array
*/