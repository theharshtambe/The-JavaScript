/*
... allows an iterable such as an array or string to be expanded into separate elements (unpack the elements)
*/

// max and min
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const maxNumber = Math.max(...numbers);
const minNumber = Math.min(...numbers);

console.log(maxNumber);
console.log(minNumber);

// separate letters
const username = 'theharshtambe';

const usernameLetters = [...username];

console.log(usernameLetters);

// copy arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];

console.log(arr1, arr2);

// merge two arrays
const newArr = [...arr1, ...arr2];

console.log(newArr);

// (...rest) allow a function work with a variable number of arguments by bundling them into an array
const sumOfElements = (...numbers) => {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
   }
   console.log(sum);
};

sumOfElements(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/*
spread: expands array into separate elements
rest: bundles separate elements into an array
*/
