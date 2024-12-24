/*
function outest() {
   var c = 20;

   function outer(b) {
      function inner() {
         console.log(a, b, c);
      }
      let a = 24;
      return inner;
   }
   return outer;
}

var close = outest()('Hello');
console.log(close);
close();
*/

/* 
function counter() {
   let count = 0;

   return function incrementCounter() {
      count++;
      console.log(count);
   };
}

const counter1 = counter();
counter1();
counter1();

const counter2 = counter();
counter2();
counter2();

This is data hiding and encapsulation
*/

function Counter() {
   var count = 0;

   this.incrementCounter = function () {
      count++;
      console.log(count);
   };

   this.decrementCounter = function () {
      count--;
      console.log(count);
   };
}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();

/*
Overconsumption of memory
variables are not garbage collected 
Memory leak (if not handled properly)
Garbage collection is reduced (variables are not garbage collected)
Smartly garbage collected 
*/
