let anoAtual;
let idadeChico = 1.50;
let idadeZe = 1.10;

for(let anoAtual=0 ;idadeChico > idadeZe ; anoAtual++) {
    let idades = [];
    if (idadeChico > idadeZe) {
        idadeChico = Number((1.50 + 0.02*anoAtual).toFixed(2));
        idadeZe = Number((1.10 + 0.03*anoAtual).toFixed(2));
    }
    idades.push(idadeChico);
    idades.push(idadeZe);

    console.log(idades);
}