const p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Prmoise Resolved Value - p1');
   }, 20000);
});

const p2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Prmoise Resolved Value - p2');
   }, 40000);
});

async function handlePromise() {
   console.log('Hello World - 1');

   const valueOne = await p1;
   console.log('Hello World - 2');
   console.log(valueOne);

   const valueTwo = await p2;
   console.log('Hello World - 3');
   console.log(valueTwo);
}

handlePromise();
