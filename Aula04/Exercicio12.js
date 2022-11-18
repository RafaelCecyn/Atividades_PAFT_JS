//Atividade 12
/*
Crie a função media, que recebe uma lista e opcionalmente um nome de campo. 
Caso o nome de campo seja fornecido, calcule a média dos valores desse campo
Caso não seja, faça a média utilizando os próprios elementos da lista

*/

const albuns = [
    {nome: "Mais", cantor: "Marisa monte", ano: 1991, nota: 8.5},
    {nome: "A tempestade", cantor: "Legião Urbana", ano: 1996, nota: 9.5},
    {nome: "Domingo", cantor: "Titãs", ano: 1995, nota: 7.5},
    {nome: "Ouro de Minas", cantor: "Roupa Nova", ano: 2001, nota: 8},
    {nome: "Como estão vocês", cantor: "Titãs", ano: 2003, nota: 7},
    {nome: "Troco Likes", cantor: "Thiago Iorc", ano: 2015, nota: 4.5},
    {nome: "Dois", cantor: "Legião Urbana", ano: 1986, nota: 10},
    {nome: "Radiola", cantor: "Skank", ano: 2004, nota: 6.5},
    {nome: "Roupa acústico", cantor: "Roupa Nova", ano: 2004, nota: 9},
    {nome: "Umbilical", cantor: "Thiago Iorc", ano: 2011, nota: 3.5},
    {nome: "Barulhinho bom", cantor: "Marisa monte", ano: 1996, nota: 7.5}
];

let avg = media(albuns, "nota");
console.log(`avg:${avg}`);
let avg2 = media([1,2,3,4,5]);
console.log(`avg2:${avg2}`);
function media(lista, propriedade) {
    if (propriedade) {
        return lista.reduce((soma, item) => soma += item[propriedade], 0) / lista.length;
    }
    return lista.reduce((soma, item) => soma += item, 0) / lista.length;
}
