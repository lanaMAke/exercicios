// Bibli#
const prompt = require('prompt-sync')();

console.log('_Calculo de salário_\n\n');
let salarioA = Number(prompt('Digite - salário mensal anterior.: '));
let salarioAt = Number(prompt('Digite - salário mensal atual.: '));
let reajuste;

// Reajuste_calculo

reajuste = ((salarioAt - salarioA) / salarioA) * 100;
console.log(`Reajuste:  ${reajuste.toFixed(2)}%`);

