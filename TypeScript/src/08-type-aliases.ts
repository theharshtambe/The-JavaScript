// type aliases with tuple example
type RGB = [number, number, number];

function generateRandomColor(): RGB {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);

   return [r, g, b];
}

const colorOne = generateRandomColor();

console.log(colorOne);

// type alises with object literals and functions
type Player = {
   name: string;
   rating: number;
};

const playerOne: Player = { name: 'Virat', rating: 94 };

console.log(playerOne);

function printPlayer(player: Player) {
   console.log(`Player is ${player.name} with rating of ${player.rating}`);
}

printPlayer(playerOne);
printPlayer({ name: 'Rohit', rating: 82 });
