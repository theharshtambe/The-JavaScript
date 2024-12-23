// function statement aka function declaration
function x() {
   console.log('I am Fucnction Statement aka Function Declaration');
}

// function expression
const y = function () {
   console.log('I am Function Expression');
};

// difference ? hoisting

// anonymous function (a function ): used in a place where functions can be used as values

// named function expression
const z = function xyz() {
   console.log('I am Named Function Expression');
};

// z();
// xyz(); not possible

/*
first class functions (first class citizens): 
ability to  
- passed as arguments
- return from function
- assign to variables 
- use as values 
*/

// arrow functions
const arrowFunc = () => {
   console.log('I am Arrow Function');
};
