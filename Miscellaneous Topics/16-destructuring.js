/* 
destructuring: extract values from arrays and objects, then assign them to variables in a convenient way 
[] array destructuring
{} object destructuring 
*/

// swap the value of two variables
let a = 24;
let b = 15;

[a, b] = [b, a];

console.log(a, b);

// swap two elements in an array
const colors = ['red', 'green', 'blue'];

[colors[0], colors[2]] = [colors[2], colors[0]];

console.log(colors);

// assign array elements to variables
const items = ['item1', 'item2', 'item3', 'item4'];

const [firstItem, secondItem, thirdItem, forthItem] = items;

console.log(firstItem);
console.log(secondItem);
console.log(thirdItem);
console.log(forthItem);

// extract valuies from objects
const harsh = {
   firstName: 'Harsh',
   lastName: 'Tambe',
   age: 21,
   job: 'Software Developer',
};

const { firstName, lastName, age, job, isMarried = false } = harsh;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
console.log(isMarried);

// destructure in function parameters
function displayHarsh({ firstName, lastName }) {
   return `My name is ${firstName} ${lastName}`;
}

const HarshTambe = displayHarsh(harsh);

console.log(HarshTambe);
