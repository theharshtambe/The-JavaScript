function a() {
   var x = 24;

   function b() {
      console.log(x);
   }

   b();
}

a();
// console.log(b) not defined
