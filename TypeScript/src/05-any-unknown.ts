// any
let valueOne: any;

valueOne = 42; // valueOne is now a number
valueOne = true; // valueOne is now a boolean
valueOne = 'Hello, Harsh'; // valueOne is now a string

// No type-checking
console.log(valueOne.length); // No error, even though valueOne could be a number
console.log(valueOne.toUpperCase()); // Will cause a runtime error if valueOne isn't a string

// unknown
let valueTwo: unknown;

valueTwo = 42; // valueTwo is now a number
valueTwo = 'Hello, Harsh'; // valueTwo is now a string
valueTwo = true; // valueTwo is now a boolean

// Type-checking is required
if (typeof valueTwo === 'string') {
   console.log(valueTwo.toUpperCase()); // Safe: TypeScript knows it's a string
} else {
   console.log('Value is not a string.');
}

// Without a type check, the following would give a compile-time error:
// console.log(valueTwo.length);   // Error: Object is of type 'unknown'.
