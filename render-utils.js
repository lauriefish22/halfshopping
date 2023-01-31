export function renderTodo(todo) {
    // create a div and a p tag
    const todoEl = document.createElement('div');
    const todoPostEl = document.createElement('p');

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    todoPostEl.classList.add('todo');
    // add the 'todo' css class no matter what

    // put the todo's text into the p tag
    todoPostEl.textContent = todo.todo;
    // append stuff
    todoEl.append(todoPostEl);

    // return the div
    return todoEl;
}
