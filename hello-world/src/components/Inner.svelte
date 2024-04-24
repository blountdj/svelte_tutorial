<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher()
    function greet() {
        dispatch('greet', 'hello from inner')
    }
</script>

<button on:click={greet}>Inner - Greet</button>