// Biblioteca#
prompt = require('prompt-sync')() // para por informação no terminal
// Multiplicação de dois números

let num1 = Number(prompt("Digite o primeiro número.: "));
let num2 = Number(prompt("Digite o segundo número.: "));

result = 0;
contactor = 0;


//comando while
while (contactor < num2){
    result += num1; // result = result + num1
    contactor++; // contactor = contactor + 1
}

// receber os números
console.log('Mostrar resultado.: ', result);
console.log('Número 1.: ', num1);
console.log('Número 2.: ', num2);
