const delayedPrint = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, delay)
    })
}
delayedPrint('Pontifícia Universidade', 1000)
    .then(() => delayedPrint('Católica do', 1000))
    .then(() => delayedPrint('Paraná', 1000));
let a = 0;
let b = 0;
let c = 0;
let contador = 0;
function realizaCalculo() {
    contador = contador + 1;
    if (contador === 3) {
        console.log(a + b * c);
    }
}
setTimeout(() => {
    a = 5;
    realizaCalculo();
}, 500);
setTimeout(() => {
    b = 10;
    realizaCalculo();
}, 200);
setTimeout(() => {
    c = 2;
    realizaCalculo();
}, 800);