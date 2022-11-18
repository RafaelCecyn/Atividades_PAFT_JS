let valor = 3;

let valoresDaSequencia =[];

while (valor > 1 ) {
     if(valor % 2 === 0){
      valor = valor/2;
      // num /= 2;
} else {
        valor = 3*valor +1;
}
    valoresDaSequencia.push(valor);
}

console.log(valoresDaSequencia)