function insertionSort(arr) {
  const swap = (arr, inx1, inx2) => {
    return ([arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]]);
  };
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
    }
  }
  return arr;
}

insertionSort([5, 3, 1, 2, 4]);
