// async with .then()
const p1 = new Promise((resolve, reject) => {
   resolve('Promise Resolved Value - Using .then()');
});

async function getData() {
   return p1;
}

const dataPromise = getData();

dataPromise.then((data) => console.log(data));

// async with await
const p2 = new Promise((resolve, reject) => {
   resolve('Promise Resolved Value - Using async-await');
});

async function handlePromise() {
   const data = await p2;
   console.log(data);
}

handlePromise();
