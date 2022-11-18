const eCrescente = function(lista) {
    for (let i = 0; i<lista.length;i++) {
        if(lista[i] >lista[i+1]){
            return 'decrescente'
        }
    }
    return 'crescente'

}

console.log(eCrescente([1,3,5]))

