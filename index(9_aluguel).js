//Bibli#
prompt = require('prompt-sync')();

//dados
let diasAlugados = Number(prompt("Digite a quantidade de dias que será alugado: "));
let taxaFixaDiaria = 50;
let totalAluguel;
let desconto = 10;
let kmRodados = Number(prompt("Digite a quantidade de km rodados: "));
let taxaKmRodado = 20;
let totalKm;
let valorTotal;

//Calculo
     totalAluguel = diasAlugados * taxaFixaDiaria - (diasAlugados * taxaFixaDiaria * desconto / 100);
     totalKm = kmRodados * taxaKmRodado;
     valorTotal = totalAluguel + totalKm;


//Saida
    console.log (`\n A quantidade de dias alugados: ${diasAlugados}\n`);
 
    console.log (` Valor da taxa fixa diária: ${taxaFixaDiaria.toFixed(2)}\n`);

    console.log (` Valor de taxa por aluguel a ser pago: ${totalAluguel.toFixed(2)}\n`);

    console.log (` Quantidade de km rodados: ${kmRodados.toFixed(2)}\n`);

    console.log (` Valor da taxa por km rodado: ${taxaKmRodado.toFixed(2)}\n`);

    console.log (`valor de taxa por km rodado - Total: ${totalKm.toFixed(2)}\n`);

    console.log (` valor total a ser pago: ${valorTotal.toFixed(2)}`);