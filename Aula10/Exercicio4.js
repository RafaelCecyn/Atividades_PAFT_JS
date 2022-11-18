function testNum(num) {
    return new Promise((resolve, reject) => {
       if (num > 10) {
          resolve(num);
       }  else {
          reject(num);
       }      
    });
 }
 
 testNum(10)
    .then(v => console.log(`Numero é maior que 10: ${v}`))
    .catch(v => console.log(`Numero não é maior que 10: ${v}`))