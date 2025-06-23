// Bibli#
const prompt = require('prompt-sync')();

//
console.log('♥_Batimentos_♥');;
let anos = prompt('Quantos anos você tem? ');
let batimentos; 

//Calculo
batimentos = anos * (365 * 24 * 60 * 60);

console.log(`${batimentos} batimentos de coração.`);