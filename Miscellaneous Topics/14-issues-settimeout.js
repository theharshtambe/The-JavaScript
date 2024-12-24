console.log('Start');

setTimeout(() => {
   console.log('Callback');
}, 5000);

console.log('End');

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
   endDate = new Date().getTime();
}

console.log('While expired');

/*
So basically setTimeout() will at least wait for 5000ms but if any code present which take take more than 5000ms then it will halt 

What if time of setTimeout is 0 ?
Still that function has to go through Callback Queue 
*/
