function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generateSequence();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
