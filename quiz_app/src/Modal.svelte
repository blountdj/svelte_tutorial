<script>
    import { fade, fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    let w

    const dispatch = createEventDispatcher()
</script>


<div class="modal-bg" transition:fade blind:clientWidth={w} >
    <div class="modal" transition:fly={{y: 200}}>
        <button on:click={() => dispatch('close')}>close</button>
        <slot />
    </div>
</div>


<style lang="scss">
    .modal-bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        
        .modal {
            background: white;
            padding: 20px;
            border-radius: 15px;
        }
    }


</style>