const menos = function (x,y) {
    if (y === undefined) {
        return -x;
    } 
    return x - y;
}


console.log(menos(10));
console.log(menos(10,5));

