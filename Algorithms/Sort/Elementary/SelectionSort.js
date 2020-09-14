// Even thought selection sort is implemented in almost the same way, unlike Bubble Sort
// finds the lowest value in each cycle and puts it in the begining of the next iteration.

const swap = (arr, inx1, inx2) =>
  ([arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]]);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (i !== min) swap(arr, i, min);
    else break;
  }
  console.log(arr);
  return arr;
}

selectionSort([8, 1, 23, 53, 46, 6, 87, 45]);
