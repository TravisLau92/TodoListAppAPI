document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');

    // Fetch todos from the API
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.title;

                // If the todo is completed, add a checkmark and completed class
                if (todo.completed) {
                    li.classList.add('completed');
                    const checkmark = document.createElement('span');
                    checkmark.classList.add('checkmark');
                    checkmark.innerHTML = '&#x2714;'; // Checkmark character
                    li.appendChild(checkmark);
                }

                todoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
});