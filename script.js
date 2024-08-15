const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');

let todos = [];

todoButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }
});

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.textContent = todo;
        todoList.appendChild(li);
    });
}