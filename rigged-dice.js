
const prompt = require('prompt-sync')({sigint: true});

let riggedNumber = Number(prompt("Choose one die side/number, to boost: "));

const dieArray = [1,2,3,4,5,6];
dieArray.push (riggedNumber); 

let rollPosition = (Math.ceil(Math.random() * 7))
let roll = dieArray[rollPosition];


if (roll === riggedNumber){
  console.log("Your rigged number of " + riggedNumber + " has been rolled.");
}

else {
  console.log(roll);
}