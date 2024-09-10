import { counter } from '$lib/counter.js'


export async function load() {
    counter.subscribe((count) => console.log(count))

    // DONT DO THIS -avoid mutating shared state on the server
    // counter.update((count) => count + 1)

    return {
        // OK - pass the data to the component
        count: 10
    }
}