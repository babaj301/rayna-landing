const input = document.getElementById('input');
const addTodo = document.getElementById('addTodo');
const deleteButton = document.getElementById('deleteTodo');
const todoList = document.getElementById('todos');

let todoToUse = [];

function getAllTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const limitedTodos = data.slice(0, 20);
      todoToUse = limitedTodos;
      showTodos();
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function showTodos() {
  const todos = todoToUse.map((todo) => {
    return `<div class="flex gap-4"><li>${todo.title}</li> <button class="bg-orange-700 p-2 text-white border-2 border-white mb-3" onclick="deleteTodo(${todo.id})">Delete</button></div>`;
  });
  todoList.innerHTML = todos.join('');
}

const deleteTodo = (id) => {
  const index = todoToUse.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todoToUse.splice(index, 1);
    showTodos();
  }
};
const addTodos = () => {
  if (!input.value) {
    alert('Please enter a todo');
    return;
  }

  const newTodo = {
    id: todoToUse.length + 1,
    title: input.value,
  };
  todoToUse.push(newTodo);
  input.value = '';
  showTodos();
};

addTodo.addEventListener('click', addTodos);

getAllTodos();
