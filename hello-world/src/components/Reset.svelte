<script>
    import { countStore } from '../store/stores'

    function reset() {
        countStore.set(0)
    }
</script>

<button on:click={reset}>Reset</button>