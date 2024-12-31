type Person = {
   id: string | number;
   firstName: string;
};

type User = Person & {
   email: string;
};

const personOne = {
   id: 1,
   firstName: 'Harsh',
};

const personTwo = {
   id: 2,
   firstName: 'Riya',
   email: 'abc@gmail.com',
};

const personThree = {
   email: 'xyz@gmail.com',
};

function printUser(user: User) {
   console.log(`${user.id} ${user.email} ${user.firstName}`);
}

// printUser(personOne); gives error
printUser(personTwo);
// printUser(personThree); gives error
