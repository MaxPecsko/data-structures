// Pattern involves dividing a data set into smaller chunks and the repeating
// a process with a subset of data.
// This pattern can tremendously decrease time complexity.

function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1;
  }
  for (let i = 0; i < str1.length; i++) {
    if (frequencyCounter2[i] in frequencyCounter1[i]) {
    }
  }
}

sameFrequency(182, 281);
