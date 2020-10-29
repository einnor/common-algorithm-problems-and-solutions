'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'segment' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER x
 *  2. INTEGER_ARRAY space
 */

function segment(x, space) {
    // Write your code here
    const minimumValues = [];
    for (let index = 0; index <= space.length - x; index++) {
        const subArrayToCompare = space.slice(index, index + x);
        const minValue = getMinInArray(subArrayToCompare);
        minimumValues.push(minValue);
    }

    return getMaxInArray(minimumValues);
}

function getMaxInArray(array) {
    return array.reduce((max, cur) => max >= cur ? max : cur, -Infinity);
}

function getMinInArray(array) {
    return array.reduce((min, cur) => min <= cur ? min : cur, Infinity);
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x = parseInt(readLine().trim(), 10);

    const spaceCount = parseInt(readLine().trim(), 10);

    let space = [];

    for (let i = 0; i < spaceCount; i++) {
        const spaceItem = parseInt(readLine().trim(), 10);
        space.push(spaceItem);
    }

    const result = segment(x, space);

    ws.write(result + '\n');

    ws.end();
}
