// import { PageServerLoad } from './$types';
import { Actions, fail } from '@sveltejs/kit'
import { getTodos, clearTodos, removeTodo, addTodo } from "$lib/server/database"


/* The primary purpose of +page.server.js is to fetch and prepare data 
   on the server before it reaches the client. 
   This can include fetching data from APIs, databases, or any other server-side resources.
   
   It exports a load function that runs on the server side and returns the data needed 
   for rendering the page. 
   The data returned by this function is available in the corresponding Svelte page component 
   via the load function or data prop. */

export const load = (async () => {
    const todos = getTodos()
    return { todos }
})


async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const actions = {
    addTodo: async ({ request }) => {
        const formData = await request.formData()
        const todo = String(formData.get('todo'))

        if (!todo) {
            return fail(400, { todo, missing: true })
        }

        await sleep(2000)

        addTodo(todo)

        return { success: true }
    },

    removeTodo: async ({ request }) => {
        const formData = await request.formData()
        const todoId = Number(formData.get('id'))

        removeTodo(todoId)

        return { success: true }
    },
    clearTodos: () => {
        clearTodos()
    }
}