function operate(func, a, b) {
  return func(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(operate(add, 2, 3));
console.log(operate(multiply, 2, 3));
