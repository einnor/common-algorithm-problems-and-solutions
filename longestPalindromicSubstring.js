/**
 *
 * @param {String} str
 * Time O(n^2)
 * Space O(1)
 */
const solution = (str) => {
  const currentLongest = [0, 0];

  for (let i = 1; i < str.length; i++) {
    const odd = getLongestPalindromeFrom(str, i - 1, i + 1);
    const even = getLongestPalindromeFrom(str, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = longest[1] - longest[0] > currentLongest[1] - currentLongest[0] ? longest : currentLongest;
  }

  return str.slice(currentLongest[0], currentLongest[1] + 1);
};

const getLongestPalindromeFrom = (str, leftIdx, rightIdx) => {
  while (leftIdx >= 0 && rightIdx < str.length) {
    if (str[leftIdx] !== str[rightIdx]) {
      break;
    }
    leftIdx -= 1;
    rightIdx += 1;
  }
  return [leftIdx + 1, rightIdx - 1];
};
