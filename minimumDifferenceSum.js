const minDiff = (arr) => {
    // Write your code here
    const sortedArray = arr.sort((a, b) => a-b);
    const sumOfAbsoluteDifferences = sortedArray.reduce((acc, cur, index, array) => {
        if (index === 0) {
            return 0;
        }
        const absoluteDifference = Math.abs(array[index-1] - cur);
        return acc + absoluteDifference;
    }, 0);
    return sumOfAbsoluteDifferences;
};
