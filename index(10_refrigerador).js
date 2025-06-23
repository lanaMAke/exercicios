// Bibli# 
const prompt = require('prompt-sync')()  

//Consumo_potência elétrica de um refrigerador

let taxa = Number(prompt("Digite potência - Watts: "));
let tempo = Number(prompt("Digite o tempo de funcionamento: "));
let valor = Number(prompt("Digite valor - KW/h : R$  "));

// Cálculo do consumo

let custoMensal = (taxa * tempo * valor) / 1000;

// Saída
console.log(`O custo mensal é: R$ ${custoMensal.toFixed(2)}`)

