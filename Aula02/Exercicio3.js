const numero = 20;
i = 0
while (i < 5) {
    const valor = prompt(`Informe o valor: `)
    const valorRetornado = Number(valor)
    if (valorRetornado > 100 || valorRetornado < 0){
        console.log("Você quer resistir? ");
        break;
    } else if (valorRetornado === numero) {
        console.log('Parabéns');
        break;
    } else if (valorRetornado > numero) {
        console.log('Maior');
    } else {
        console.log('Menor');
    }
    i++;
}