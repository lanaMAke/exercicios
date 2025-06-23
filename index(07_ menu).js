// Bibli# 
const prompt = require('prompt-sync')()  

// Menu

console.log('_____Menu_____\n');
console.log('1 - Converter temperatura para Celsius');
console.log('\n2 - Converter quantidade de Chuva');
console.log('\n3 - Sair');
let opção = Number(prompt('\nOpção: '));


// Comando switch

switch (opção){
    case 1:
    // DADOS
        let temp = Number(prompt('\nTemperatura - °F: '));
        // Conversão
        let tempC = 5/9 * (temp - 32);
        console.log(`\n${temp}°F = ${tempC.toFixed(2)}°C`);
        break;
    // DADOS
    case 2:
        let quantChuva = Number(prompt('quantidade de chuva - mm: '));
        // Conversão
        const polegada = 25.4;
        let quantChuvaP = quantChuva / polegada;
        console.log(`\n${quantChuva} mm = ${quantChuvaP.toFixed(2)} polegadas`);
        break;
    // OP..
    case 3:
        console.log('\nVocê saiu...');
        break;
    // caso nenhuma das op.
    default:
        console.log('\nOpção inválida!');
}
