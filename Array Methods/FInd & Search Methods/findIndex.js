// example 1
const items = [
   { name: 't-shirt', price: 400 },
   { name: 'shoes', price: 600 },
   { name: 'cargos', price: 800 },
   { name: 'blazer', price: 1200 },
];

const expensiveItem = items.findIndex((item) => item.price > 600);

console.log(expensiveItem);

// example 2
let books = [
   { title: 'JavaScript Basics', pages: 150 },
   { title: 'Learn React', pages: 250 },
   { title: 'Master Node.js', pages: 400 },
];

const largeBook = books.findIndex((book) => book.pages > 200);

console.log(largeBook);

// The findIndex() method returns the index of the first element in an array that satisfies a condition (a callback function). If no element is found, it returns -1.
