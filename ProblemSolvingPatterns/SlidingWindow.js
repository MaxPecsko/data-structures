// Pattern involves creating a window which can either be an array or number
// from one position to another. Depending on a certain condition a window either
// increases or closes (and new window is created). Useful to keep track of a subset of data

function maxSubArraySum(arr, num) {
  let maxSum = 0; // The maximum sum in sunstet of arr
  let tempSum = 0; // Temorary variable which we gonna use through each iteration to compare with maxSum
  if (arr.length < num) return null; // Simple check for falsy value
  // First we wanna make one cycle through given arr n times
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // Then to find the largest subset of n numbers we want to continue looping
  // through the array and we want to substract the first number from prevois iteration
  // and add last number from upcomnig iteration - Sliding Window Patter
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(maxSum);
}

maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
