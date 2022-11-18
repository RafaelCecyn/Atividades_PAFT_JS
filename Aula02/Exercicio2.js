const pessoas = [
    {nome: 'Rafael', cor:'branco'},
    {nome: 'Mark',   cor:'negro'},
    {nome: 'Luis', cor:'pardo'},
    {nome: 'Claudia', cor:'outro'},
    {nome: 'Stephany', cor:'branco'},
    {nome: 'Jose', cor:'negro'},
    {nome: 'Rose', cor:'pardo'},
    {nome: 'Cris', cor:'outro'},
    {nome: 'Vini', cor:'negro'},
    {nome: 'Gabriel', cor:'branco'},
    {nome: 'Renato', cor:'pardo'},
    {nome: 'Marlom', cor:'outro'},
    {nome: 'Luana', cor:'negro'},
    {nome: 'Luana', cor:'pardo'},
    {nome: 'Stephan', cor:'outro'},
]

let pessoasBranco = [];
let pessoasNegro = [];
let pessoasPardo = [];
let pessoasOutro = [];

for (let pessoa of pessoas) {
    if (pessoa.cor == 'branco') {
        pessoasBranco.push(pessoa);
    }
    else if (pessoa.cor == 'negro') {
        pessoasNegro.push(pessoa);
    }
    else if (pessoa.cor == 'pardo') {
        pessoasPardo.push(pessoa);
    }
    else {
        pessoasOutro.push(pessoa);
    }
}

console.log(`O número de pessoas com a cor branco é ${pessoasBranco.length}`)
console.log(`O número de pessoas com a cor negro é ${pessoasNegro.length}`)
console.log(`O número de pessoas com a cor parda é ${pessoasPardo.length}`)
console.log(`O número de pessoas coma cor outro é ${pessoasOutro.length}`)



