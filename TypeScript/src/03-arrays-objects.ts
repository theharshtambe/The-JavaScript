// arrays
const stringArray: string[] = ['Harsh', 'Riya', 'Shriya', 'Arya', 'Ovi'];
const numberArray: number[] = [24, 15, 31, 13, 14];

stringArray.push('Aai');
numberArray.push(24);

console.log(stringArray);
console.log(numberArray);

// object literals
const person: {
   firstName: string;
   lastName: string;
   age: number;
   isMarried: boolean;
} = {
   firstName: 'Harsh',
   lastName: 'Tambe',
   age: 21,
   isMarried: false,
};

console.log(
   `My name is ${person.firstName} ${person.lastName} and I am ${person.age} years old.`
);
