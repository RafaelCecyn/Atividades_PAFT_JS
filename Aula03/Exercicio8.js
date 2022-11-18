function mapear(values, condicao) {
    const result = [];
    for (const value of values) {
        result.push(condicao(value));
    }
    return result;
  }
  
  const dobro = mapear([1,2,3,4], x => x * 2);
  console.log("Dobro: " + dobro);