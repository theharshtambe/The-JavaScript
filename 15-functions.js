// higher order functions: a function that takes another function as argument or returns a function from it
function x(y) {
   y();
}

function x() {
   console.log('Hello');
}

// here x is HOF and y is Callback Function

const radius = [3, 1, 2, 4];

function area(radius) {
   return Math.PI * radius * radius;
}

function diameter(radius) {
   return radius * 2;
}

function circumference(radius) {
   return 2 * Math.PI * radius;
}

function calculate(arr, logic) {
   const output = [];

   for (let i = 0; i < arr.length; i++) {
      output.push(logic(arr[i]));
   }

   return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));

/*
function calculateArea(radius) {
   const output = [];

   for (let i = 0; i < radius.length; i++) {
      output.push(Math.PI * radius[i] * radius[i]);
   }

   return output;
}

console.log(calculateArea(radius));

no need to create more functions like calculateDiameter and calculateCircumference
*/
