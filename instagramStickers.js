const solution = (phrase) => {
  const map = {};
  let minimumNumberOfStickers = 0;
  const lowerCasedPhrase = phrase.toLowerCase();

  for (const char of lowerCasedPhrase) {
    map[char] = (map[char] || 0) + 1;
  }

  // Handle for 'a' since it appears twice in the word 'instagram'
  if (map['a']) {
    map['a'] = Math.ceil(map['a'] / 2);
  }

  // Find the minimum number of stickers
  for (const char in map) {
    if (map[char] > minimumNumberOfStickers) {
      minimumNumberOfStickers = map[char];
    }
  }

  return minimumNumberOfStickers;
};