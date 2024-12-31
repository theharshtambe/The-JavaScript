// fucntion signatures
type calculator = (x: number, y: number) => number;

function addTwoNumbers(x: number, y: number) {
   return x + y;
}

function subtractTwoNumbers(x: number, y: number) {
   return x - y;
}

function squareNumber(a: number) {
   return a * a;
}

function joinTwoNumbers(x: number, y: number) {
   return `${x}${y}`;
}

const calcs: calculator[] = [];

calcs.push(addTwoNumbers);
calcs.push(subtractTwoNumbers);
calcs.push(squareNumber);
/*
why this is working ?
as long as function is returning number the no. of arguments does not matter
*/
// calcs.push(joinTwoNumbers); gives errors

// function signatures inside interfaces
interface HasArea {
   name: string;
   calculateArea(x: number): number;
}

const shapeOne: HasArea = {
   name: 'Circle',
   calculateArea(r): number {
      return Math.PI * r * r;
   },
};

const shapwTwo: HasArea = {
   name: 'Square',
   calculateArea(l): number {
      return l ** 2;
   },
};

const areaOfCircle = shapeOne.calculateArea(5);
const areaOfSquare = shapwTwo.calculateArea(10);

console.log(areaOfCircle);
console.log(areaOfSquare);
