function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
       const result = [];
       for (let word of words) {
          if (typeof word !== 'string') {
             reject(word);
             return;
          }
          result.push(word.toUpperCase());
       }
       resolve(result);
    });
 }   
 function sortWords(words) {
    return new Promise((resolve, reject) => {
       resolve([...words].sort());
    });
 }
 makeAllCaps(["carambola", "abacaxi", "banana"])
    .then(sortWords)
    .then(console.log)
    .catch(v => console.log("Não é um texto: " + v));