const { Console } = require('console');

// Bibli#
const prompt = require('prompt-sync')();

// valor do custo de uma lata

let raio = Number(prompt('Digite o raio do cilindro: '));
let altura = Number(prompt('Digite a altura do cilindro: '));
const pi = 3.14;

// Cálculo da área do cilindro

let result = (2 * pi * (raio**2)) + (2 * raio * altura);
console.log(result.toFixed(2));

// Cálculo do Custo

let = alum = 100.00;
let = custo = result * alum;
// tela
console.log(`R$ ${custo.toFixed(2)}`);

