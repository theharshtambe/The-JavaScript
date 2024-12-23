/*
function x() {
   var a = 24;

   function y() {
      console.log(a);
   }
   y();
}

x();
*/
/*
closure:
   - a function binded together with its lexical environment 
   - a function along with its lexical scope 
*/

/*
function x() {
   var a = 24;

   return function y() {
      console.log(a);
   };
   // return y;
}

var z = x();
console.log(z);
z();
// we can modify this by doing z()(); If we do this then no need to execute using separate variable 
*/
/*
Here comes closure into picture!

When functions are return from another funtion they still maintain there L.E. i.e Function along with its L.E is returned 
*/

/*
function x() {
   var a = 24;

   function y() {
      console.log(a);
   }
   a = 15;
   return y;
}

var z = x();
console.log(z);
z();
*/
/*
15 will be printed because a does not refer to value and the reference to that memory location is returned 
*/

function a() {
   var x = 24;

   function b() {
      var y = 15;

      function c() {
         console.log(x, y);
      }
      c();
   }
   b();
}

a();
