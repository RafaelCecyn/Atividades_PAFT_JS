function unicos(valores, campo) {
    const resultados = {};
    for (const valor of valores) {
        resultados[valor[campo]] = true;
    }
    return Object.keys(resultados);
}

console.log(unicos([1,2,3,4,5,5,3]));