<script>
    import { counter } from '$lib/counter.js';

    import Increment from './increment.svelte';
    import Decrement from './decrement.svelte';
    import Reset from './reset.svelte';
</script>

<input bind:value={$counter} />
<h1>The count is {$counter}</h1>

<Increment />
<Decrement />
<Reset />


<br />
<br />
<p>Alternative (better?) implementation:</p><a href="/counter2">link</a>
