const segment = (x, space) => {
    // Write your code here
    const minimumValues = [];
    for (let index = 0; index <= space.length - x; index++) {
        const subArrayToCompare = space.slice(index, index + x);
        const minValue = getMinInArray(subArrayToCompare);
        minimumValues.push(minValue);
    }

    return getMaxInArray(minimumValues);
}

const getMaxInArray = (array) => {
    return array.reduce((max, cur) => max >= cur ? max : cur, -Infinity);
}

const getMinInArray = (array) => {
    return array.reduce((min, cur) => min <= cur ? min : cur, Infinity);
}
