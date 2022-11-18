//Atividade 11
/*
Crie a função paginador que recebe uma lista e um tamanho de página. 
Ela deve retonar outra função que quando chamada com um número de página, retorne apenas os elementos daquela página
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

let pagina = paginador(albuns, 3);
console.log("pagina:"+JSON.stringify(pagina(1)));

function paginador(lista, tamanhoPagina = 10) {
    return function(nrPagina = 0) {
        const inicio = nrPagina * tamanhoPagina;
        const fim = (nrPagina+1) * tamanhoPagina;
        return lista.slice(inicio, fim);
    }
}