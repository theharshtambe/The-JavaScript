// example 1
const items = [
   { name: 't-shirt', price: 400 },
   { name: 'shoes', price: 600 },
   { name: 'cargos', price: 800 },
   { name: 'blazer', price: 1200 },
];

const expensiveItem = items.find((item) => item.price > 600);

console.log(expensiveItem);

// exmaple 2
const students = [
   { name: 'Rahul', score: 85 },
   { name: 'Priya', score: 72 },
   { name: 'Aman', score: 91 },
];

const topperStudent = students.find((student) => student.score > 80);

console.log(topperStudent);

// The find() method returns the first element in an array that satisfies a condition (a callback function). If no element is found, it returns undefined.
