const solution = (s) => {
  const reversedConvertedArray = [];

  for (let index = s.length - 1; index >= 0; index--) {
    if (s[index] === '#') {
      const char = String.fromCharCode(parseInt(s[i - 2] + s[i - 1], 10) + 96);
      reversedConvertedArray.push(char);
      index -= 2;
    } else {
      const char = String.fromCharCode(parseInt(s[index], 10) + 96);
      reversedConvertedArray.push(char);
    }
  }

  return reversedConvertedArray.reverse().join('');
};
