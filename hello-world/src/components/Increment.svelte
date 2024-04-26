<script>
    import { countStore } from '../store/stores'

    function increment() {
        countStore.update(value => {
            return value + 1
        })
    }
</script>

<button on:click={increment}>Increment</button>