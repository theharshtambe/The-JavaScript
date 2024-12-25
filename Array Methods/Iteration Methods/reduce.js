const arr = [5, 2, 3, 1, 4];

const sumOfElements = arr.reduce((accumulator, current) => {
   accumulator = accumulator + current;
   return accumulator;
}, 0);

const maxElement = arr.reduce((accumulator, current) => {
   if (current > accumulator) {
      accumulator = current;
   }
   return accumulator;
}, 0);

console.log(sumOfElements);
console.log(maxElement);

/*
callback function is iterated over each element of array
current = arr[i]
accumulator 
*/

// The reduce() method is used when you want to come up with the single value from elements of array.

/*
function calcuolateSum(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
   }
   return sum;
}

console.log(calcuolateSum(arr));

function calcuolateMax(arr) {
   let max = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}

console.log(calcuolateMax(arr));
*/
