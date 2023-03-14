// Get the input field and the todo list
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Load the todo list from localStorage (if it exists)
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// Render the todo list
function renderTodoList() {
  // Clear the current list items
  todoList.innerHTML = "";

  // Loop through the todos array and create new list items
  for (let i = todos.length - 1; i >= 0; i--) {
    const todo = todos[i];

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = todo;

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit");
    editBtn.addEventListener("click", () => editTodoItem(i));

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    

    }}