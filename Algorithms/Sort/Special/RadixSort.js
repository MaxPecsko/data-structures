/*
  Radix sort is a special no comparison sorting algorithms which does not perform a comparison between 2 values
  to sort the array. Instead it's going through the n digit of the number starting from last to first and categprises
  the values into the buckets on each cycle. 
  Takes advantage of the fact that numbers with more digits are always greater then numbers with the lower amount of digits.
*/

// Get digit - helper function gets a digit of a number at the givern position
const getDigit = (num, i) => Math.floor(Math.abs(num) / 10 ** i) % 10;

// Digit count - returns number of digits in the number
function countDigits(num){
  if (num === 0) return 0;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
} 

// Most digits - finds what is the max amount of digits in the number of the array
function mostDigits(arr) {
  let maxDigits = 0;
  for (let n of arr) {
    maxDigits = Math.max(maxDigits, countDigits(n))
  }
  return maxDigits;
}

function radixSort(nums) {
  const bucketsCount = mostDigits(nums);

  for (let i = 0; i < bucketsCount; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let n = 0; n < nums.length; n++) {
      let digit = getDigit(nums[n], i);
      buckets[digit].push(nums[n]);
    }

    nums = [].concat(...buckets);
  }
  return nums;
} 
// console.log(getDigit(6845, 4))
// console.log(countDigits(6845))
radixSort([6845, 123, 5142, 1, 5, 7, 1235, 6, 45, 7645])