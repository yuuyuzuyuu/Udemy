const todos = [
  {
    id: 1,
    title: 'Go to school',
    completed: true
  },
  {
    id: 2,
    title: 'Go to museum',
    completed: true
  },
  {
    id: 3,
    title: 'Go to library',
    completed: false
  }
]

// for(let i = 0; i < todos.length; i++) {
//   let todo = todos[i];
//   console.log(i, todo);
// }

for(let i in todos) {
  console.log(todos[i]);
}

for(let todo of todos) {
  console.log(todo.title);
}