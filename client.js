// it should store the todos arrays on an object

todosList = {
  todos: [],

// it should have a display todos method
  displayTodos: function() {
    console.log("My Todos", this.todos); //"this" refers to entire todosList object
    // it should tell you if list is empty
    if(this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      for (var = 0; i < this.todos.length; i++) {
        console.log("My Todos:");
        // it should show completed todos
        if(this.todos.completed[i] === true) {
          console.log("(x) ", this.todos[i].todoText); // todosObject.eachTodoItem[i].todoTextProperty
        } else {
          console.log("( ) ", this.todos[i].todoText);
        }
      }
    }
  },

  // addTodo should add objects ie todo text
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText, // property: parameter
      completed: false;
    });
    this.displayTodos();
  },

  //change todo should change the todo text property
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
