// Biblioteca para entrada de dados 

const prompt = require("prompt-sync")();

let soma = 0;

//Solicita primeiro valor para somar
let valorDigitado = Number(prompt("Digite um valor para somar: "));

//Enquanto o valor digitado for diferente de 0, soma o valor digitado com a variavel soma

while (valorDigitado !== 0){
    soma += valorDigitado;
  console.log(`Soma parcial.: ${soma}`);
//  Solicita outro valor para somar
  valorDigitado = Number(prompt("Digite outro valor para somar: "));
}
//Exibe a soma final
console.log(`Soma final.: ${soma}`);