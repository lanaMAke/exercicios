//Bibli#
const prompt = require('prompt-sync')();

// data

let num_1 = parseInt(prompt("num° 1: "));
let num_2 = parseInt(prompt("num° 2: "));

// process
let soma = 0;
let i = 0;

  for( i = num_1; i <=num_2; i++){
    soma = soma + i;
    console.log(i);
  
}
console.log('');
console.log(soma);
