const maior = function (lista) {
    let maiorValor = lista[0];
    for (let i=1 ; i<lista.length;i++ ) {
        if (lista[i] > maiorValor) {
            maiorValor = lista[i]
        }
    }
    return maiorValor;
}



const lista1 = [1,10,1.5];
const lista2 = [1,-100,5];

console.log(maior(lista1));
console.log(maior(lista2));
