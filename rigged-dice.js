const prompt = require('prompt-sync')({sigint: true});

let riggedNumber = Number(prompt('Please choose a rigged number between 1 and 6: >> '));


let roll = (Math.ceil(Math.random() * 7))


if(roll === 7){
  console.log("Your rigged number of" + riggedNumber + "has been rolled.");
}else{
  console.log(roll);
}