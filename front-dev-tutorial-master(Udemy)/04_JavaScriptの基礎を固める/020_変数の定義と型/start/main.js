function hello(name, age) {
  // let name = 'Tom';
  console.log('hello ' + name + age);
  return name + age;
}

hello('Nick', 10);
const returnVal = hello('joh', 20);
console.log(returnVal);

// JSは、動的型付け言語である。（その場その場で型が変わる）