import {
    checkAuth,
    createTodo,
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

// let some todo state (an array)
let todo = [];

todoForm.addEventListener('submit', async (e) => {
    // on submit,
    e.preventDefault();
    const data = new FormData(todoForm);

    await createTodo(data.get('todo'));
    // create a todo in supabase using for data
    // reset the form DOM element
    // and display the todos
    displayTodos();
});

async function displayTodos() {
    
    // clear the container (.textContent = '')
    
    // fetch the user's todos from supabase
    // loop through the user's todos
    for (let todo of todos) {
        const todoEl = document.createElement('div');
        todoEl.textContent = '';
        // for each todo, render a new todo DOM element using your render function
        todoEl.textContent = `${'todo'}`;
        // then add an event listener to each todo
        todoEl.addEventListener('click', async () => {
            await 
        }}
        // on click, update the todo in supabase
        // then (shockingly!) call displayTodos() to refresh the list
        displayTodos();
        // append the rendered todo DOM element to the todosEl
        todosEl.append(todoEl);
        }


window.addEventListener('load', async () => {
    // fetch the todos and store in state
    todo = await getTodos();
    // call displayTodos
    displayTodos();
});

logoutButton.addEventListener('click', () => {
    logout();
});

deleteButton.addEventListener('click', async () => {
    // delete all todos
    deleteAllTodos();

    // then refetch and display the updated list of todos
});
