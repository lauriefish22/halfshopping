const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createTodo() {
    const { data, error } = await client.from('todo').select('*');

    return data;
}

//export async function deleteAllTodos() {
// delete all todos for this user in supabase
// once you have a response from supabase, comment this back in:
// return checkError(response);

export async function deleteAllTodos() {
    const response = await client.from('todos').delete().match({ user_id: getUser().id });
    return checkError(response);
}

export async function getTodos() {
    const { data } = await client.from('todo').select('*');

    return data;
}

export async function completeTodo(id) {
    // find the and update (set complete to true), the todo that matches the correct id
    const { data, error } = await client.from('todo').update({ is_complete: true }).eq('id', id);
    // once you have a response from supabase, comment this back in:
    return checkError(response);
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    const user = getUser();
    if (user) {
        location.replace('./todos');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    window.location.replace('../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
