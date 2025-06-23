// Bibli#
const prompt = require('prompt-sync')();

let valorUS = Number(prompt('Digite o valor do produto - Dólar: $  '));
let valorRS = Number(prompt('Digite o valor - Real: R$ '));
let result ;

// Operação
result = valorUS * valorRS
// tela
console.log(`Valor convertido.: ${result.toFixed(2)}`);

