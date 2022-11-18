function log(modulo, nivel, texto) {
    console.log(`${nivel}: ${texto} (${modulo})`)
}


function fixar(fn, ...esquerda) {
    return function(...direita) {
        return fn(...esquerda, ...direita);
    }
}