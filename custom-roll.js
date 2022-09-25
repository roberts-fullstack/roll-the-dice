const prompt = require('prompt-sync')({sigint: true});

let sides = Number(prompt("How many sides for your die? "))

console.log(`Here's a random roll of a die with ${sides} sides: \n`);

console.log(Math.ceil(Math.random()*sides))
console.log(`\n`);