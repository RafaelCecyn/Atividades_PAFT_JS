function join(valores, separador = ",") {
    if (valores.length === 0) return "";
    let saida = `${valores[0]}`;
    for (let i = 1; i < valores.length; i++) {
       saida += `${separador}${valores[i]}`
    }
    return saida;
 }

