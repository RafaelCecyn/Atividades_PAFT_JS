const h1 = document.querySelector('h1');
const select = document.querySelector('select');
for (let i = 2; i<22;i++) {
let numeros = document.createElement('option');
numeros.innerText = i;
select.append(numeros)
}
let placar1 = 0
let placar2 = 0

const botao1 = document.querySelector('.botao1')
const botao2 = document.querySelector('.botao2')
const botao3 = document.querySelector('.botao3')

botao1.addEventListener('click', function() {
    placar1++;
    document.querySelector('.placar1').innerText = placar1;
})

botao2.addEventListener('click', function() {
    placar2++;
    document.querySelector('.placar2').innerText = placar2;
})

botao3.addEventListener('click', function() {
    placar1 = 0
    placar2 = 0
    document.querySelector('.placar1').innerText = placar1;
    document.querySelector('.placar2').innerText = placar2;
})




