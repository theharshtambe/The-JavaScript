function addAllNumbers(...items: number[]): number {
   let sum: number = 0;
   for (let i: number = 0; i < items.length; i++) {
      sum += items[i];
   }
   return sum;
}

console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
