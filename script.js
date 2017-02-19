// it should store the todos arrays on an object
var todoList = {
  todos: [],

  // addTodo should add objects ie todo text
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText, // property: parameter
      completed: false
    });
  },

  //change todo should change the todo text property
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText; //todolistObject.todosArray[positionParameter].todoTextProperty = todoTextValue
  },

  // it should have a delete todo method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },

  //toggle Completed should flip the completed property
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {// if all todos items are completed then increment by one
        completedTodos++;
      }
    }
    //Case 1: If everything is true, make everything false
    if(completedTodos === totalTodos) {
        for (var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = false;
        }
    //Case 2: Otherwise make everything true
    } else {
        for (var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = true;
        }
      }
  }
};

var handlers = {
  addTodo: function() {
    var addTodotextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodotextInput.value);
    addTodotextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    var toggleCompletedTextInput = document.getElementById('toggleCompletedTextInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
   var totalTodos = this.todos.length;
   var completedTodos = 0;

   //Get number of completed todos using forEach
   this.todos.forEach(function(todo) {
     if (todo.completed === true) {
        completedTodos++;
      }
   });

   //Case 1: If everything is true, make everything false
   this.todos.forEach(function(todo) {
     if (completedTodos === totalTodos) {
       todo.completed = false;
       //Case 2: Otherwise make everything true
     } else {
        todo.completed = true;
      }
   });
  }
};

// this just shows what the todo list looks like
var view = {
  displayTodos: function() {
     var todosUl = document.querySelector('ul');
     todosUl.innerHTML = '';

    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

       if (todo.completed === true) {
         todoTextWithCompletion = "(x) " + todo.todoText;
       } else {
         todoTextWithCompletion = "( ) " + todo.todoText;
       }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event) {
    //console.log(event.target.parentNode.id);
    //get the element that was clicked on
    var elementClicked = event.target;

      //check if element clicked is delete button
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); // parseInt - this gets the id of button as a number , passes it in as "position" arg
      }
    });
  }
};

view.setUpEventListeners();
