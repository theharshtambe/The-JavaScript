const personOne = {
   firstName: 'Harsh',
   lastName: 'Tambe',
};

const personTwo = {
   firstName: 'Riya',
   lastName: 'Naik',
};

function printFullName(age, hometown) {
   console.log(
      `My name is ${this.firstName} ${this.lastName}. I am ${age} years old, I am from ${hometown}`
   );
}

// call and apply
printFullName.call(personOne, 21, 'Ratnagiri');
printFullName.call(personTwo, 20, 'Virar');

printFullName.apply(personOne, [21, 'Nalasopara']);
printFullName.apply(personTwo, [20, 'Vatar']);

// bind
const printHarshName = printFullName.bind(personOne, 21, 'Ratnagiri');
console.log(printHarshName);
printHarshName();
