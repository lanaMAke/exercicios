// Bibli#
const prompt = require('prompt-sync')();

console.log('Calculo de salário')
let salario = Number(prompt('Digite - salário por hora.: '));
let horasT = Number(prompt('Digite - horas trabalhadas(mensal).: '));
let salarioB;
let salarioL;


// Calculo

salarioB = salario * horasT;
console.log(`Salário bruto:  ${salarioB.toFixed(2)}`);

console.log('Possui horas extras?');
console.log('1 - sim');
console.log('2 - Não');
let opcao = Number(prompt('Digite a opção desejada: '));
//switch 
switch (opcao){
  case 1:
    let horasE = Number(prompt('Digite - horas extras trabalhadas(mensal).: '));
    let salarioE = salario * 1.5 * horasE;
    salarioB = salarioB + salarioE;
    salarioL = salarioB - (salarioB * 0.06);
    console.log(`Salário liquido: ${salarioL.toFixed(2)}`);
     break;

  case 2:
    salarioL = salarioB - (salarioB * 0.06);
    console.log(`Salário liquido: ${salarioL.toFixed(2)}`);
    break;
}
      
