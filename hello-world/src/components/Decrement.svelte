<script>
    import { countStore } from '../store/stores'

    function decrement() {
        countStore.update(value => {
            return value - 1
        })
    }
</script>

<button on:click={decrement}>Decrement</button>