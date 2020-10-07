const solution = (array) => {
  const subsets = [[]];
  for (const element of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = [...subsets[i]];
      currentSubset.push(element)
      subsets.push(currentSubset);
    }
  }

  return subsets;
};
