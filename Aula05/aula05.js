const h1 = document.querySelector('h1');
h1.style.color = 'rgb(0,255,0)';
h1.onclick = () => {
    alert('h1 clicked');
}
const h1s = document.querySelectorAll('h1');
for (const h of h1s) {
    h.style.backgroundColor = 'red';
    h.innerText += ' ahhhhhhh'
}
const itens = document.querySelector('.itens');
const newItem = document.createElement('li');
newItem.innerText = 'item novo';
newItem.id = 'item';
newItem.classList.add('item3');

newItem.addEventListener('mouseenter', function() {
    console.log('entered')
})
// newItem.onmouseenter 


itens.appendChild(newItem);
const item1 = document.querySelector('#item1');
const input = document.querySelector('input');

// input.oninput = function(e) {
//     h1.innerText = input.value;
// };

// input.oninput = function(e) {
//     newItem.innerText = input.value;
// }; // sobreEscreve

input.addEventListener('input', function(e) {
        newItem.innerText = input.value;
});

input.addEventListener('input', function(e) {
        h1.innerText = input.value;
});

