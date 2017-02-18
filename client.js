// it should have a way to store todos
var todos = ['item 1', 'item 2', 'item 3'];

// it should have a fucnction to display todos
function displayTodos() {
  console.log("My todos", todos);
}

// it should have a way to add todos
function addTodos(todo) {
  todos.push(todo);
  displayTodos();
}

// it should have a way to change todos
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

// it should have a way to delete todos
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
