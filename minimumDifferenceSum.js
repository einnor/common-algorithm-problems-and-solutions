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
 * Complete the 'minDiff' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minDiff(arr) {
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

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const result = minDiff(arr);

    ws.write(result + '\n');

    ws.end();
}
