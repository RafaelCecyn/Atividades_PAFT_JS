/* Crie uma lista com alguns valores e imprima:
- Os valores positivos
- A média de todos os valores
*/

const numeros = [-10,-5,1,3,5,6,8,10];
const numerovazio = [];
for (let numero of numeros) {
    if (numero > 0) {
        numerovazio.push(numero);
    }
}
console.log(`Positivos: ${numerovazio} `);

let somaNumeros = 0;
for (let numero of numeros) {
    somaNumeros = somaNumeros + numero;
    media = somaNumeros/numeros.length;
}
console.log(`A média é ${media}`)