var globalVariable = 'I am present in Global Object';

function globalFunction() {
   console.log('I am present in Global Object');
}

console.log(window.globalVariable);
window.globalFunction();

/*
When JS code is executed:

GEC

Global Object (window)

JS -> JS Engine -> Global Object 

this keyword 

At global space this === window

Variables and functions in global space are get attached to Global Object (window.x)
 */
