import { writable } from 'svelte/store' // writable values

export function createCountStore(initialValue, onChange = () => {}) {
    const count = writable(initialValue)

    function update(updater) {
        count.update((current) => {
            const newValue = updater(current);
            if (newValue !== current) {
                onChange(newValue)
            }
            return newValue
        })
    }

    function increment() {
        update((n) => n + 1)
    }

    function decrement() {
        update((n) => n - 1)
    }

    function reset() {
        update(() => initialValue)
    }

    function square() {
        update((n) => n * n)
    }

    return { ...count, increment, decrement, reset, square, update }
}