// type guards
type Id = number | string;

function swapIdType(id: Id): Id {
   if (typeof id === 'string') {
      return parseInt(id);
   } else {
      return id.toString();
   }
}

console.log(swapIdType('24'));
console.log(swapIdType(24));

// typeof id === 'string' this is type guard

// tagged interfaces
interface User {
   type: 'user';
   username: string;
   email: string;
   id: Id;
}

interface Person {
   type: 'person';
   firstName: string;
   age: number;
   id: Id;
}

const userOne: User = {
   type: 'user',
   username: 'Harsh',
   email: 'abc@gmail.com',
   id: 24,
};

const personOne: Person = {
   type: 'person',
   firstName: 'Riya',
   age: 20,
   id: 15,
};

function logDetails(value: User | Person): void {
   if (value.type === 'user') {
      console.log(value.username);
      console.log(value.email);
   }
   if (value.type === 'person') {
      console.log(value.firstName);
      console.log(value.age);
   }
}

logDetails(userOne);
logDetails(personOne);
