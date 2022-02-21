// function hello(callback, lastname) {
//   console.log(callback);
//   console.log('hello ' + callback(lastname));
// }

// function getName() {
//   return 'Mickey Mouse';
// }

// function getFirstName() {
//   return 'Mickey';
// }

// hello(function(name) {
//   return 'Mickey' + name;
// }, 'Mouse');

function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function mutiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

doSomething(2,2,mutiply);
doSomething(3,3,plus);