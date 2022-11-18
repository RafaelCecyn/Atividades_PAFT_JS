// 1. Crie uma função chamada mais, que aceite 2 parâmetros e os some. Utiliza as 3 sintaxes possíveis

function mais (numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        return false
    }
    return numero1 + numero2
}

console.log(mais(2,3));


const mais2 = function (numero11, numero12) {
    if (typeof numero11 !== 'number' || typeof numero12 !== 'number') {
        return false
    }
    return numero11 + numero12
}

console.log(mais2(3,5));

const mais3 = (numero33,numero44) => {
    if (typeof numero33 !== 'number' || typeof numero44 !== 'number') {
        return false
    }
    return numero33 + numero44
}

console.log(mais3(4,6));

