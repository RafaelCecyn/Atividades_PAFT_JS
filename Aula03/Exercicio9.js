function collatz(n) {
    let value = n;
    return function() {
      value = (value % 2 === 0) ?  value /= 2 : (3 * value ) + 1;
      return value;
    }
  }
  const seq = collatz(5);
  console.log(seq());
  console.log(seq());
  console.log(seq());
  console.log(seq());
  console.log(seq());
  