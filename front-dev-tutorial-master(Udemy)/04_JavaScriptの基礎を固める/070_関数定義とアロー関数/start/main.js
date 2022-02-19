const hello = (name = 'Tom') => {
  console.log('hello,' + name);
}

hello();
hello("John");

const arry = [1,2,3,4,5];

arry.forEach(value => console.log(value));