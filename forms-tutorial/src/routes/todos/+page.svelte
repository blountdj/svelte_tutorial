<script>
    import { enhance } from '$app/forms';
    
    export let data; // This loads the data from the +page.server.js file
    export let form;

    let loading = false

    const addTodo = () => {
        // do something before the form is submitted
        loading = true

        return async ({ update }) => {
            // do something after the form is submitted

            loading = false
            await update();
        }
    }
</script>

<!-- PRE preserves spaces, tabs, and line breaks. -->
<pre> 
    {JSON.stringify(form, null, 2)};
</pre>

<ul>
    {#each data.todos as todo}
    <li>
        <span>{todo.text}</span>
        <form method="POST" action="?/removeTodo" use:enhance>
            <input type="hidden" name="id" value={todo.id} />
            <button class="delete" type="submit">X</button>
        </form>
    </li>
    {/each}
</ul>

<form method="POST" action="?/addTodo" use:enhance={addTodo}>
    <input type="text" name="todo" />
    {#if form?.missing }
        <p class="error">This field is required</p>
    {/if}
    <button 
        aria-busy={loading} 
        class:secondary={loading}
        type="submit"
        >
            {#if !loading}
                + Add Todo
            {/if}
            {#if loading}
                <span class="spinner"></span> Loading...
            {/if}
        </button>

    <button 
        formaction="?/clearTodos" 
        class="secondary" 
        type="submit">Clear
    </button>
</form>

{#if form?.success }
    <p>Added todo!</p>
{/if}

<style>
    ul {
        padding: 0;
    }

    li {
        display: flex;
        justify-content: space-between;
        align-self: center;
    }

    span {
        text-transform: capitalize;
    }

    .delete {
        margin: 0;
        background: none;
        border: none;
        color: black;
    }

    .error {
        color: tomato;
    }

    .spinner {
        border: 2px solid #f3f3f3; /* Light grey */
        border-top: 2px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 16px;
        height: 16px;
        animation: spin 1s linear infinite;
        display: inline-block;
        margin-right: 8px; /* Space between spinner and text */
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

</style>