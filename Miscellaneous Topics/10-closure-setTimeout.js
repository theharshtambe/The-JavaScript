/*
function x() {
   var i = 24;

   setTimeout(() => {
      console.log(i);
   }, 3000);

   console.log('Hello');
}

x();
*/

function x() {
   for (var i = 1; i <= 5; i++) {
      setTimeout(() => {
         console.log(i);
      }, i * 1000);
   }

   console.log('Hello');
}

x();

// solution: use let
