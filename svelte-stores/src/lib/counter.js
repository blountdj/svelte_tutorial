import { writable } from 'svelte/store' // writable values
import { readable } from 'svelte/store' // read-only values - you can only subscribe to it
import { derived } from 'svelte/store' // useful if you need to derive the value based on the value of other stores
import { get } from 'svelte/store' // Get the value from a store without subscribing to it


export function createCounter(initialValue) {
    const { subscribe, set, update } = writable(initialValue)

    function increment() {
        update(i => i + 1)
    }

    function decrement() {
        update(i => i - 1)
    }

    function reset() {
        set(initialValue)
    }
    
    return { subscribe, increment, decrement, reset }
}

export const counter = createCounter(0)
