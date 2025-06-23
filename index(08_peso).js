// Bibli# 
const prompt = require('prompt-sync')()  

// Peso médio de 3 pessoas

// Primeira pessoa
console.log("**Média de Peso**\n\n");
let nome1 = prompt("Digite o nome da primeira pessoa: ");
let idd1 = Number(prompt("Digite a idade da primeira pessoa: "));
let peso1 = Number(prompt("Digite o peso da primeira pessoa: "));

// Segunda pessoa
let nome2 = prompt("\nDigite o nome da segunda pessoa: ");
let idd2 = Number(prompt("Digite a idade da segunda pessoa: "));
let peso2 = Number(prompt("Digite o peso da segunda pessoa: "));

// Terceira pessoa
let nome3 = prompt("\nDigite o nome da terceira pessoa: ");
let idd3 = Number(prompt("Digite a idade da terceira pessoa: "));
let peso3 = Number(prompt("Digite o peso da terceira pessoa: "));


// Calculo da média

let pesoMedio = ((peso1 + peso2 + peso3) / 3);

console.log( `\nO peso médio das pessoas  citadas é de:  ${pesoMedio.toFixed(2)}`);