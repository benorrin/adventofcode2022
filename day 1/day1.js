const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
}

function splitArray(array) {
    var temp = [];
    var combinedArray = [];

    array.map(x => {  
        if(x) {
            temp.push(x)
        } else {
          combinedArray.push(temp)
          temp = []
        }
    });

    return combinedArray;
}

function sumCalories(array) {
    var combinedArray = [];
    array.forEach(element => {
        combinedArray.push(element.reduce((a, b) => Number(a) + Number(b), 0));
    });
    return combinedArray;
}

function getLargest(array) {
    return Math.max(...array);
}

var inputData = syncReadFile('./input.txt');
var elvesArray = splitArray(inputData);
var totalCalories = sumCalories(elvesArray);
var largest = getLargest(totalCalories);

console.log(largest);