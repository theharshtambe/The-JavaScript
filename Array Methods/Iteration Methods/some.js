const prices = [200, 100, 150, 400, 320];

const hasDiscount = prices.some((price) => price < 110);

console.log(hasDiscount);

// The some() method checks if at least one element in the array satisfies a condition. It returns true or false.
