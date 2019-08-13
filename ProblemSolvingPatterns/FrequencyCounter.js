// Write the function that takes 2 arrays and return 'true' if the second array
//containts all squraed numbers of the first array

// This is a naive solution as BigO in this case is O(n^2) which is inefficient
function same(arr1, arr2) {
  // Frist i want to check the length of both array and if they not same return false
  if (arr1.length !== arr2.length) {
    console.log("Provided arrays should have the same amount of numbers");
    return false;
  }
  // then I want to loop through the array (we don'r care through which exectly as their length is the same)
  for (let i = 0; i < arr1.length; i++) {
    let squaredNum = arr1[i] ** 2;
    // Technically indexOf gonna loop throuhg arr2 so we have a nested iteration and Big O => O(n^2)
    let condition = arr2.indexOf(squaredNum);
    if (condition === -1) {
      return false;
    }
    // When we meet the condition we want to remove item from the second array so that each value is unique
    arr2.splice(condition, 1);
  }
  return true;
}

// Another approach usign Frequency Counter pattern
// Even though we have 3 loops in this function they're not nested so Big O => O(n)
// And it's much more efficient then a quadratic approach above
function sameRefactored(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("Provided arrays should have the same amount of numbers");
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // First I wanna write all the values form the first array into an object which gonna count the unique ones
  for (let i of arr1) {
    frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
  }
  // Same for the second one
  for (let i of arr2) {
    frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    let squaredKey = key ** 2;
    if (!(squaredKey in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[squaredKey] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
