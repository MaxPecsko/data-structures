// Given two strings write a function to determine if the second string is an
// anagram of the first string

function isAnagram(str1, str2) {
  // First I wanna check if both string have the same length
  if (str1.length !== str2.length || (str1.length === 0 || str2.length === 0)) {
    console.log("Strings should have the same length and not be empty");
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  // Here we need to determin if the second str has all of the chars form the first one
  for (let char in frequencyCounter1) {
    // First we check if the sedonc str has all the chars from the first one
    if (!(char in frequencyCounter2)) {
      return false;
    }
    // Then we check if the ammount of the same chars that repeated are the same
    if (frequencyCounter2[char] !== frequencyCounter1[char]) {
      return false;
    }
  }
  return true;
}

isAnagram("cinemam", "icemane");
