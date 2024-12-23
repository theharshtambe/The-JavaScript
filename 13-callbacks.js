// callback function: a function passed to another function
/*
setTimeout(() => {
   console.log('I am setTimout');
}, 5000);

function x(y) {
   console.log('I am X');
   y();
}

x(function y() {
   console.log('I am Y');
});
*/

// closures demo with eevent listeners
function attachEventListener() {
   let count = 0;

   document
      .getElementById('btn')
      .addEventListener('click', function callback() {
         console.log('Hii! How are you ?', ++count);
      });
}

attachEventListener();

// garbage collection and removeEvevntListeners
