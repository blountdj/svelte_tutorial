<script>
    import { createCountStore } from '$lib/counter-store.js';

    // export const count2 = createCountStore(2)
    export const count2 = createCountStore(2, onChange)

    function onChange(value) {
        console.log('count2 changed to ' + value)
    }

    export const count3 = createCountStore(10)

</script>

<h1>Count2: {$count2}</h1>
<h1>Count3: {$count3}</h1>
<button on:click={count2.increment}>+1</button>
<button on:click={count2.decrement}>-1</button>
<button on:click={count2.square}>square</button>
<button on:click={count2.reset}>reset</button>