function verbose(f) {
    let func = f;
    return function(...values) {
       const result = func(...values);
       console.log(`Imprime ${soma.name}(${values.join(',')}) = ${result}`);
       return result;
    }
  }
  const soma = (a, b) => a + b;
  
  const sum = verbose(soma);
  sum(5,2);