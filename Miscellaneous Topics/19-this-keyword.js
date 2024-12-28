'use strict';

function x() {
   console.log(this);
}

x();
window.x();

const obj = {
   a: 10,
   x: function () {
      console.log(this.a);
   },
};

obj.x();

const obj2 = {
   a: 20,
};

obj.x.call(obj2); // value of this = student2

const o1 = {
   x: 24,
   m: function () {
      const n = () => {
         console.log(this);
      };
      n();
   },
};

o1.m(); // enclosing lexical context
