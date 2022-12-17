'use strict';

console.log('=== Task 1 ===');

const randomArray = (length, max) => (
    [...new Array(length)]
    .map(() => Math.round(Math.random() * max))
);

const mainArray = randomArray(15, 20);
console.log(mainArray);

console.log('=== Task 2 ===');

const secondArray = mainArray.filter(val => {
    if (val % 3 === 0)
    return val;
});

console.log(secondArray);

console.log('=== Task 3 ===');

const thirdArray = mainArray.find(element => element > 7);

console.log(thirdArray);

if (!mainArray.find(element => element < 7)) { 
    console.log('We have no element > 7');
}

console.log('=== Task 4 ===');

const fourthArray = mainArray.map(val => {
    return val * 2;
});

console.log(fourthArray);

console.log('=== Task 5 ===');

const fifthArray = mainArray.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0)
      return currentValue + accumulator;
    else return accumulator;
    }, 0
);

console.log(fifthArray);

console.log('=== Task 6 ===');

mainArray.shift();
console.log(mainArray);

mainArray.pop();
console.log(mainArray);

console.log('=== Task * ===');

const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];

const array = arrayOne.filter(function(word, index, arr) {
    if (arr.includes(word) === arrayTwo.includes(word)) {
        return word;
    }
});

console.log(array);
