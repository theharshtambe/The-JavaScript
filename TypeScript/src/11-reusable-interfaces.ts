interface hasQuantity {
   quantity: number;
}

function printQuantity(item: hasQuantity): void {
   console.log(`The quantity of item is ${item.quantity}`);
}

const fruit = {
   name: 'Mango',
   quantity: 24,
};

const vegetable = {
   type: 'Leafy',
   quantity: 15,
};

const person = {
   username: 'Harsh',
   age: 21,
};

printQuantity(fruit);
printQuantity(vegetable);
// printQuantity({ quantity: 100, bestBefore: '1 month' }); gives error
