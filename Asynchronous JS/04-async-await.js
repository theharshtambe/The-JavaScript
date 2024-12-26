// handling promise with .then()
const iAmPromise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Prmoise Resolved Value - Using .then()');
   }, 10000);
});

function getPromise1Data() {
   console.log('Hello from .then()');
   iAmPromise1.then((data) => console.log(data));
}

getPromise1Data();

/*
what happend here ?
js engine was not waiting for promise to be resolved 
 */

// handling promise with async-await
const iAmPromise2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Prmoise Resolved Value - Using async-await');
   }, 10000);
});

async function getPromise2Data() {
   // console.log('I am before using await');
   const data = await iAmPromise2;
   console.log('Hello from async-await');
   console.log(data);

   /*
   **
   const dataCopy = await iAmPromise2;
   console.log('Hello from async-await');
   console.log(dataCopy);
   */
}

getPromise2Data();

/*
what happend here ?
js engine was waiting for promise to be resolved (actually it doesn't wait, we'll see its bts)
but...
- if something is present before await then it will be printed ex. console.log('I am before using await');
- if data is resloved two times using await then both will be printed simulataneously after 10 seconds ex. **
 */
