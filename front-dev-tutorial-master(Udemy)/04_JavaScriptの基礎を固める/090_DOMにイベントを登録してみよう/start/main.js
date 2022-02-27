const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1')
// btn.addEventListener('click', function(){
//   alert('hello');
// })

const changeColor = function() {
  h1.style.color = 'red';
}
const changeBgColor = function() {
  h1.style.backgroundColor = 'yellow';
}
btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);
// btn.addEventListener('mouseenter', hello);