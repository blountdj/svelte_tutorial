let todos = [
    {
        id: Date.now(),
        text: 'Learn how forms work',
        completed: false
    }
]

export function getTodos() {
    return todos
}

export function addTodo(text) {
    todos = [
        ...todos,
        {
            id: Date.now(),
            text,
            completed: false
        }
    ]
}

export function removeTodo(id) {
    todos = todos.filter(todo => todo.id !== id)
}

export function clearTodos() {
    todos = []
}