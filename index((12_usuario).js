//Bibli#
const prompt = require('prompt-sync')();

// Dados 

let usuario = prompt('Digite seu usuário: ');
let senha = prompt('Digite sua senha: ');

// Processamento

do {
  // Verificar o usuário e a senha
  
  if (usuario === 'admin' && senha === 'senha123') {
    console.log('\nAcesso concedido!');
    break;
  } else if (usuario === senha) {
    console.log('\nUsuário e senha iguais!');
  } else {
    console.log('\nUsuário ou senha incorreto!');
  }

  // Solicita novamente o usuário e a senha
  usuario = prompt('Digite seu usuário: ');
  senha = prompt('Digite sua senha: ');

} while (usuario !== 'admin' || senha !== 'senha123');
