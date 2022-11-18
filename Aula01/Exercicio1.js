const peso = 85
const altura = 1.88

const imc = (peso / Math.pow(altura,2)).toFixed(2);

let obeso = false;
if(imc >= 30){
    obeso = true;
}

console.log(` O valor do IMC para ${peso} quilos e ${altura} metros é de ${imc}`);