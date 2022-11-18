setTimeout(() => {
    console.log("Pontificia Universidade")
    setTimeout(() => {
       console.log("Católica do")
       setTimeout(() => console.log("Paraná"), 2000);
    }, 500);
 }, 1000);