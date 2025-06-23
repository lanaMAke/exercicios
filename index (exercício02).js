// Biblioteca#
prompt = require('prompt-sync')() // para por informação no terminal
// Multiplicação de dois números

let nota1 = Number(prompt("Digite o primeira nota.: "));
let nota2 = Number(prompt("Digite o segunda nota.: "));
let nota3 = Number(prompt("Digite o terceira nota.: "));
let nota4 = Number(prompt("Digite o quarta nota.: "));

let result;

// comando 

result = (nota1 + nota2 + nota3 + nota4) / 4

// exibir o resultado
 console.log("A média é: ", result);