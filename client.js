// it should store the todos arrays on an object

todosList = {
  todos: ['item 1', 'item 2', 'item 3'],

// it should have a display todos method
  displayTodos: function() {
    console.log("My todos", this.todos); //"this" refers to entire todosList object
  },

  // it should have an add todo method
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },

  //it should have a change todo method
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },

  // it should have a delete todo method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
}
