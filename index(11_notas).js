//Bibli#
const prompt = require('prompt-sync')();

// Dados 

let nota = Number(prompt("Digite a nota do aluno: "));

// Comando - For && if

for (let i = 0; i < 10; i++){
  if (nota > 10){
    console.log("Nota_invalida");
    break;
  }else if (nota < 0){
      console.log("Nota_valida");
      break;
  }
} console.log("Nota_valida");