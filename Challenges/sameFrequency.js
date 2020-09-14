function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  const fCounter1 = {};
  const fCounter2 = {};
  for (let i = 0; i < str1.length; i++) {
    fCounter1[str1[i]] = (fCounter1[str1[i]] + 1 || 0);
    fCounter2[str2[i]] = (fCounter2[str2[i]] + 1 || 0);
  }
  for (let i = 0; i < str1.length; i++) {
    if (fCounter1[str1[i]] !== fCounter2[str1[i]]) return false;
  }
  return true;
}

sameFrequency(123, 321);
