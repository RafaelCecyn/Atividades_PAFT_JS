/* 1. Crie uma função justDate que recebe uma data e retorna a mesma data,
mas com os campos de tempo zerados.
*/


const justDate = function (date) {
    let novaData = date.toLocaleString('pt-br').slice(0,10)
    console.log(novaData)
}
const date = new Date();

justDate(date)