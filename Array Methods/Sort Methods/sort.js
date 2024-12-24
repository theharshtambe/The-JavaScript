// sorting strings alphabetically
let fruits = ['Banana', 'Apple', 'Cherry', 'Mango'];

fruits.sort();

console.log(fruits);

// sorting numbers (issue with default sort)
const numbers = [10, 2, 33, 5];

numbers.sort();

console.log(numbers);

// sorting numbers correctly: using comparator function
const ascending = numbers.sort((a, b) => a - b); // ascending order
console.log(ascending);

const descending = numbers.sort((a, b) => b - a); // descedingn order
console.log(descending);
/*
how this code is working ?
a - b -> +ve: a > b
a - b -> -ve: a < b
a - b -> 0: a = b
 */

// sorting objects using a custom comparator
// sorting objects by age
const people = [
   { name: 'John', age: 25 },
   { name: 'Alice', age: 30 },
   { name: 'Bob', age: 20 },
];

people.sort((a, b) => a.age - b.age);

console.log(people);

// sorting objects by name alphabetically
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);

// The sort() method is used to sort the elements of an array in place. By default, it sorts arrays alphabetically or based on their string values.
