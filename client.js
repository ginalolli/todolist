// it should store the todos arrays on an object

todosList = {
  todos: ['item 1', 'item 2', 'item 3'],

// it should have a display todos method
  displayTodos: function() {
    console.log("My todos", this.todos); //"this" refers to entire todosList object
  },

  // addTodo should add objects ie todo text
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText, // property: parameter
      completed: false;
    });
    this.displayTodos();
  },

  //chnage todo should change the todo text property
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText; //todolistObject.todosArray[positionParameter].todoTextProperty = todoTextValue
    this.displayTodos();
  },

  // it should have a delete todo method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  //toggle Completed should flip the completed property
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
}
