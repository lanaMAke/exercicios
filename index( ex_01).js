// Bibli#
const prompt = require('prompt-sync')();

num1 = Number(prompt('Digite o primeiro número: '));
num2 = Number(prompt('Digite o segundo número: '));
num3 = Number(prompt('Digite o terceiro número: '));

// Verificar Média
media = (num1 + num2 + num3) / 3;

// Aparecer na tela
console.log(`\nA média dos números é: ${media.toFixed(2)}`);