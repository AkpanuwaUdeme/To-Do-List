document.getElementById('add-btn').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
loadTodos();

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        addTodoElement(todo);
    });
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const todo = input.value.trim();
    if (todo) {
        addTodoElement(todo);
        saveTodo(todo);
        input.value = '';
    }
  }